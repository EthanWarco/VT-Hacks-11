import React from 'react';
import ReactDOM from 'react-dom';
import './Messages.css'

function sendMessage(message) {
    console.log(message);
}

class Textbox extends React.Component {
    constructor(){
      super();
      this.state={message: ''}
    }
    render() {
      return (
        <div className = "textbox">
            <label for="text"></label>
            <input value={this.state.message} onChange={(e)=>{this.setState({message: e.target.value})}} type="text" name="text" size="30" maxlength="10000" className="messagetext"></input>
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