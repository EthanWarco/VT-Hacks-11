import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Messages from "./Messages";
import Challenges from "./Challenges";
import Leaderboard from "./Leaderboard";
import AddEvent from "./AddEvent.js";
import AddChallenge from "./AddChallenge.js";
import Ratings from "./Ratings.js"
import './App.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <BrowserRouter>
                <div className="topnav">
                    <div className='link'><NavLink to="/">Leaderboard</NavLink></div>
                    <div className='link'><NavLink to="/messages">Message Board</NavLink></div>
                    <div className='link'><NavLink to="/challenges">Challenges</NavLink></div>
                    <div className='link'><NavLink to="/ratings">Ratings</NavLink></div>
                    <div className='link'><NavLink to="/add-event">Record an Event</NavLink></div>
                    <div className='link'><NavLink to="/add-challenge">Start a Challenge</NavLink></div>
                    <div className='link'>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
                </div>
                <Routes>
                    <Route exact path="/messages" element={<Messages />} />
                    <Route exact path="/challenges" element={<Challenges />} />
                    <Route exact path="/ratings" element={<Ratings />} />
                    <Route exact path="/add-event" element={<AddEvent />} />
                    <Route exact path="/add-challenge" element={<AddChallenge />} />
                    <Route exact path="/" element={<Leaderboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;