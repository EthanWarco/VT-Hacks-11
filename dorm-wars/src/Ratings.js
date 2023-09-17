import './Ratings.css';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function getReviews() {
    return [["Ethan Warco", "Slusher Tower", "This dorm sucks!"], ["Lily Warco", "O'Shaughnessy", "I love this dorm!"]];
}

export default function Ratings() {
    const [formData, setFormData] = useState({
        userName: '',
        dormName: '',
        body: '',
    });

    const { isAuthenticated, user } = useAuth0();
    const [reviews, setReviews] = useState([]);
    const [isLoading, setLoading] = useState(true);

    function refreshReviews() {
        fetch("http://127.0.0.1:5000/reviews")
            .then(response => response.json())
            .catch(error => console.error(error))
            .then(response => setReviews(response))
            .finally(setLoading(false));
    }

    useEffect(() => {
        refreshReviews();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitReview = (e) => {
        if (!isAuthenticated) {
            return <div>Sign in to leave a review!</div>;
        }
        e.preventDefault();
        fetch("http://localhost:5000/review", {
            method: "post",
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <div class="area">
                <h2>Submit Review</h2>
                <form onSubmit={submitReview}>
                    <input name="dormName" onChange={handleInputChange} style={{ width: 600 }} placeholder="Name of the Dorm" />
                    <input name="userName" onChange={handleInputChange} style={{ width: 600 }} placeholder="First and Last Name" />
                    <input name="body" onChange={handleInputChange} style={{ height: 200, width: 600 }} placeholder="Enter upto 500 words" />
                    <input type="submit"></input>
                </form>
                <div className = "review">{reviews.map(review => <Review key={review["_id"]} dorm = {review["dorm_name"]} name = {review["user_name"]} message = {review["body"]}/>)}</div>
            </div>
        </div>
    );
}

function Review(props) {
    return (
        <div className = "review">
            <br/>
            <div>
                <strong>{props.dorm}</strong>
                <span style = {{color:"gray"}}> - {props.name}</span>
            </div>
            <div className = "message">{props.message}</div>
        </div>
    );
}