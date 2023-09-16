import Category from './Category.js';
import './Leaderboard.css'

function getMostFireAlarms() {
    return [["Pritchard", 23], ["Slusher", 19], ["Hoge", 5], ["East Egg", 3], ["Ambler Johnston", 2]]
}

function getMostAmbulances() {
    return [["Pritchard", 23], ["Slusher", 19], ["Hoge", 5], ["East Egg", 3], ["Ambler Johnston", 2]]
}

function getMostParties () {
    return [["Pritchard", 23], ["Slusher", 19], ["Hoge", 5], ["East Egg", 3], ["Ambler Johnston", 2]]
}

function Leaderboard() {
    const mostFireAlarms = getMostFireAlarms();
    const mostAmbulances = getMostAmbulances();
    const mostParties = getMostParties();
    return (
        <>
            <div className="Leaderboard">
                <Category title = "Fire Alarms Pulled" info = {mostFireAlarms} />
                <Category title = "Parties Hosted" info = {mostParties} />
                <Category title = "Ambulances Arrived" info = {mostAmbulances} />
            </div>    
        </>
    );
}
export default Leaderboard;