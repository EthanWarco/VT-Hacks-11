import React, { useState } from 'react';
import './Messages.css'
import { useAuth0 } from '@auth0/auth0-react';

function sendMessage(name, dorm, body) {
  console.log("attempting to send " + name + " " + dorm + " " + body);
  fetch("http://localhost:5000/message", {
    method: "post",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
    body: JSON.stringify({
      senderName: name,
      senderDorm: dorm,
      body: body
    })
  })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

export default function ChatTextbox() {
  const [message, setMessage] = useState('');
  const [dorm, setDorm] = useState('');
  const { user } = useAuth0();

  return (
    <div className="textbox">
      <label for="text"></label>
      <label for="dorm"></label>
      <input value={dorm} onChange={(e) => { setDorm(e.target.value) }} type="text" name="text" size="10" maxlength="10000"
        placeholder="Write your dorm" className="messagetext"></input>
      <input name="message" value={message} onChange={e => setMessage(e.target.value)} type="text" size="30" maxlength="10000" className="messagetext" placeholder = "Write your message here"></input>
      <button className="send" onClick={() => {
        sendMessage(user.name, dorm, message);
        setMessage('');
      }}>Send</button>
    </div>
  )
};