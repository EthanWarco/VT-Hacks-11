import './Ratings.css';
import { useState } from 'react';
import {useAuth0} from '@auth0/auth0-react';

function getReviews() {
    return [["Ethan Warco", "Slusher Tower", "This dorm sucks!"], ["Lily Warco", "O'Shaughnessy", "I love this dorm!"]];
}



export default function Ratings() {
    const [formData, setFormData] = useState({
        userName: '',
        dormName: '',
        body: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const {user} = useAuth0();

    const submitReview = (e) => {
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

    const reviews = getReviews();

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
                <div className = "review">{reviews.map(review => <Review dorm = {review[1]} name = {review[0]} message = {review[2]}/>)}</div>
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