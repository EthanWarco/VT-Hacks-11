import Category from './Category.js';
import './Leaderboard.css'
import {useState, useEffect} from 'react';


export default function Leaderboard() {
    const [board, setBoard] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      fetch("http://127.0.0.1:5000/ranks").then(response => response.json())
      .then(response => {setBoard(response)})
      .catch(error => console.error(error))
      .finally(response => {
        setLoading(false);
      });    
    }, []);
    
    if(isLoading) {
        return <div>Loading...</div>;
    }
    
    function getMetric(metricName) {
        return board.map((el) => [el["name"], el[metricName] ? el[metricName] : 0]).sort((a, b) => a[metricName] - b[metricName]);
    }

    const alarms = getMetric("alarm_count");
    const ambulances = getMetric("ambulance_count");
    const parties = getMetric("party_count");
    
    return (
        <>
            <div className="Leaderboard">
                <Category title = "Fire Alarms Pulled" info = {alarms} />
                <Category title = "Parties Hosted" info = {parties} />
                <Category title = "Ambulances Arrived" info = {ambulances} />
            </div>
        </>
    );
}