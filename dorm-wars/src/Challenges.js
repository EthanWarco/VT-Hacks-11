import { useState, useEffect } from "react";
import Challenge from "./Challenge";
import './Challenge.css';

export default function Challenges() {
    const [isLoading, setLoading] = useState(true);
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/challenges")
            .then(response => response.json())
            .catch(error => console.error(error))
            .then(response => setChallenges(response))
            .finally(setLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log(challenges);

    return (
        <div>
            <h1>Challenges</h1>
            <div class="challenge-container">
                <ul class="challenge-list">
                    {challenges.map(challenge =>
                        <Challenge
                            key={challenge["_id"]}
                            fromDorm={challenge["from_dorm"]}
                            toDorm={challenge["to_dorm"]}
                            metric={challenge["metric"]}
                            endDate={challenge["end_date"]["$date"]}
                            fromCount={0}
                            toCount={0} />)}
                </ul>
            </div>
        </div>
    );
}