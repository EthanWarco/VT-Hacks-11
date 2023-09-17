import './Messages.css';
import ChatTextbox from './ChatTextbox.js';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { dormMap } from './alias';

// function getMessages() {
//     return [["[Slusher] Ethan Warco", "Hello World!", "Sep 16 2023 4:43 PM"], ["[O'Shaughnessy] Lily Warco", "Hello World!", "Sep 16 2023 4:42 PM"]];
// }


function Messages() {
    const { isAuthenticated, user } = useAuth0();
    const [messages, setMessages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    function refreshMessages() {
        fetch("http://127.0.0.1:5000/messages")
            .then(response => response.json())
            .catch(error => console.error(error))
            .then(response => setMessages(response))
            .finally(setLoading(false));
    }

    useEffect(() => {
        refreshMessages();
    }, []);

    if (!isAuthenticated) {
        return <div>Sign in to message!</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(user);

    let msg = messages.map(el => {
        let d = new Date(Date.parse(el["sent"]["$date"]));
        return ["[" + (dormMap.get(el["sender_dorm"]) ? dormMap.get(el["sender_dorm"]) : el["sender_dorm"]) + "] " + el["sender_name"], el["body"], d.toLocaleString()]
    }
    );

    setInterval(() => { console.log("Refreshing messages..."); refreshMessages(); }, 5000);

    return (
        <div>
            <ChatTextbox />
            <div>{msg.map(message => <Message name={message[0]} message={message[1]} time={message[2]} />).reverse()}</div>
        </div>
    );
}

function Message(props) {
    return (
        <div className="messagebox">
            <div>
                <strong className="name">{props.name}</strong>
                <span className="time"> - {props.time}</span>
            </div>
            <div className="message">{props.message}</div>
        </div>
    );
}

export default Messages;