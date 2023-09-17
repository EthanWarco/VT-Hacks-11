import React from 'react';
import ReactDOM from 'react-dom';
import './AddEvent.css';
import { countMap } from './alias';

function addEvent(type, time, ampm) {
    let date = new Date(Date.now());
    let [h, m] = time.split(":");
    if (ampm === "PM") {
        date.setHours(h);
    } else {
        date.setHours(24 - h);
    }
    date.setMinutes(m);

    let metric = countMap.get(type);

    console.log(metric + date.toTimeString());

    fetch("http://localhost:5000/report", {
        method: "post",
        headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
        body: JSON.stringify({
            metric: metric,
            dorm: "slusher", // FIXME: add picker for place or read from user cookie
            date: date.toISOString()
        })
    })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.error(error));
}

class AddEvent extends React.Component {
    constructor() {
        super();
        this.state = { event: 'Fire Alarm', time: '12:00', ampm: 'AM' }
    }
    render() {
        return (
            <div className="header">
                <div>Record an Event</div>
                <br />
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
                <div>
                    <label for="event">Event: </label>
                    <select value={this.state.event} onChange={(e) => { this.setState({ event: e.target.value }) }} id="event" className="text">
                        <option value="alarm_count">Fire Alarm</option>
                        <option value="ambulance_count">Ambulance</option>
                        <option value="party_count">Party</option>
                    </select>
                </div>
                <div className="submit">
                    <button className="button" onClick={() => addEvent(this.state.event, this.state.time, this.state.ampm)}>Submit</button>
                </div>
            </div >
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddEvent />);
export default AddEvent;