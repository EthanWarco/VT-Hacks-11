import React from 'react';
import ReactDOM from 'react-dom';
import './AddChallenge.css';
<<<<<<< HEAD
import { countMap, dormMap } from "./alias";
=======
import {countMap, dormMap} from "./alias";
>>>>>>> 9b035c65d758a623279e3343704acd408802b41b

function addChallenge(type, location, time, ampm) {
    let date = new Date(Date.now());
    let [h, m] = time.split(":");
    if (ampm === "PM") {
        date.setHours(h);
    } else {
        date.setHours(24 - h);
    }
    date.setMinutes(m);

    let toDorm = dormMap.get(location);

    console.log(type + date.toTimeString());

    fetch(`http://localhost:5000/challenge/${toDorm}/${encodeURIComponent(type)}`)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

class AddChallenge extends React.Component {
    constructor() {
        super();
        this.state = { type: '', location: '', time: '12:00', ampm: 'AM' }
    }

    render() {
        return (
            <div className="header">
<<<<<<< HEAD
                <h1>Start a Challenge</h1>
                <br />
                <div>
                    <label for="type">Challenge type: </label>
                    <input value={this.state.type} onChange={(e) => { this.setState({ type: e.target.value }) }} type="text" name="type" size="20" maxlength="45" className="text"></input>
                </div>
                <div>
                    <label for="location">Challenge location: </label>
                    <input value={this.state.location} onChange={(e) => { this.setState({ location: e.target.value }) }} type="text" name="location" size="20" maxlength="45" className="text"></input>
                </div>
=======
                <div>Start a Challenge</div>
                <br />
>>>>>>> 9b035c65d758a623279e3343704acd408802b41b

                <div>
                    <label for="time">Time: </label>
                    <select value={this.state.time} onChange={(e) => { this.setState({ time: e.target.value }) }} id="time" className="text">
                        <option value="12:00" >12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="1:00">1:00</option>
                        <option value="1:30">1:30</option>
                        <option value="2:00">2:00</option>
                        <option value="2:30">2:30</option>
                        <option value="3:00">3:00</option>
                        <option value="3:30">3:30</option>
                        <option value="4:00">4:00</option>
                        <option value="4:30">4:30</option>
                        <option value="5:00">5:00</option>
                        <option value="5:30">5:30</option>
                        <option value="6:00">6:00</option>
                        <option value="6:30">6:30</option>
                        <option value="7:00">7:00</option>
                        <option value="7:30">7:30</option>
                        <option value="8:00">8:00</option>
                        <option value="8:30">8:30</option>
                        <option value="9:00">9:00</option>
                        <option value="9:30">9:30</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                    </select>
                    <label for="ampm"> </label>
                    <select value={this.state.ampm} onChange={(e) => { this.setState({ ampm: e.target.value }) }} id="ampm" className="text">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                    </select>
                </div>
<<<<<<< HEAD

                <div className="submit">
                    <button className="button" onClick={() => {
                        if (this.state.type == '' && this.state.location == '') {
                            //Set both red
                        } else if (this.state.type == '') {
                            //Set one red
                        } else if (this.state.location == '') {
                            //Set one red
                        } else {
                            addChallenge(this.state.type, this.state.location, this.state.time, this.state.ampm);
                        }
                    }}>Submit</button>
                </div>

=======
                <div>
                    <label for="type">Challenge type: </label>
                    <input value={this.state.type} onChange={(e) => { this.setState({ type: e.target.value }) }} type="text" name="type" size="20" maxlength="45" className="text"></input>
                </div>
                <div>
                    <label for="location">Challenge location: </label>
                    <input value={this.state.location} onChange={(e) => { this.setState({ location: e.target.value }) }} type="text" name="location" size="20" maxlength="45" className="text"></input>
                </div>

                <div className="submit">
                    <button className="button" onClick={() => {
                        if (this.state.type == '' && this.state.location == '') {
                            //Set both red
                        } else if (this.state.type == '') {
                            //Set one red
                        } else if (this.state.location == '') {
                            //Set one red
                        } else {
                            addChallenge(this.state.type, this.state.location, this.state.time, this.state.ampm);
                        }
                    }}>Submit</button>
                </div>
>>>>>>> 9b035c65d758a623279e3343704acd408802b41b
            </div >
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddChallenge />);
export default AddChallenge;