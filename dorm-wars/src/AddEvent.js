import './AddEvent.css';

function AddEvent() {
    return (
        <div className = "header">
            <h1>Record an Event</h1>
            <div>
                <label for="hour">Hour: </label>
                <select id="hour" className="text">
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
                <select id="ampm" className="text">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
            <div>
                <label for="event">Event: </label>
                <select id="event" className="text">
                    <option value="fire-alarm">Fire Alarm</option>
                    <option value="ambulance">Ambulance</option>
                    <option value="party">Party</option>
                </select>
            </div>
            <div className = "submit">
                <button className = "button">Submit</button>
            </div>
        </div>
    );
}

export default AddEvent;