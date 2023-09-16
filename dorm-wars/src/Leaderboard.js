import './Leaderboard.css';

function getTopDorms() {
    let dormsData = fetch("/ranks");
    return dormsData;
}

function Leaderboard() {
    return (
        <div class = "header">
            <h1>Leaderboard goes here</h1>
            <p>{getTopDorms()}</p>
        </div>
    );
}
export default Leaderboard;