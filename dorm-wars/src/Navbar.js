import './Navbar.css';

function Navbar() {
    return (
        <div className="topnav">
            <a href="/messages.html">Message Board</a>
            <a href="/challenges.html">Challenges</a>
            <a href="/index.html">Leaderboard</a>
            <a href="/add-event.html">Record an Event</a>
            <a href="/add-challenge.html">Start a Challenge</a>
        </div>
    );
  };
    
  export default Navbar;