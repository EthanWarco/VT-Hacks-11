import './Messages.css';
import Textbox from './Textbox.js';

function getMessages() {
    return [["Ethan Warco", "Hello World!", "Sep 16 2023 4:43 PM"], ["Lily Warco", "Hello World!", "Sep 16 2023 4:42 PM"]];
}

function Messages() {
    const messages = getMessages();
    return (
        <div>
            <h1>Messages</h1>
            <br />
            <div>{messages.map(message => <Message name={message[0]} message={message[1]} time={message[2]} />)}</div>
            <Textbox />
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