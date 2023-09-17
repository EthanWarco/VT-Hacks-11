import React from 'react';
import ReactDOM from 'react-dom';
import './Messages.css'

function sendMessage(dorm, text) {
}

class Textbox extends React.Component {
    constructor(){
      super();
      this.state={message: '', dorm: ''}
    }
    render() {
      return (
        <div className = "textbox">
            <label for="dorm"></label>
            <input value={this.state.dorm} onChange={(e)=>{this.setState({dorm: e.target.value})}} type="text" name="text" size="10" maxlength="10000" 
            placeholder = "Write your dorm" className="messagetext"></input>
            <label for="text"></label>
            <input value={this.state.message} onChange={(e)=>{this.setState({message: e.target.value})}} type="text" name="text" size="30" maxlength="10000" 
            placeholder = "Write your message here" className="messagetext"></input>
            <button className="send" onClick={() => {
              sendMessage(this.state.message);
              this.setState({message: ''});
            }}>Send</button>
        </div>
      )
    }
  }
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Textbox />);
export default Textbox;