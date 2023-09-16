import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Messages from "./Messages";
import Challenges from "./Challenges";
import Leaderboard from "./Leaderboard";
import AddEvent from "./AddEvent.js";
import AddChallenge from "./AddChallenge.js";
import './App.css';

function App() {
<<<<<<< Updated upstream
  
    return (
        <>
            <BrowserRouter>
              <div className="topnav">
                <div className='link'><NavLink to="/">Leaderboard</NavLink></div>
                <div className='link'><NavLink to="/messages">Message Board</NavLink></div>
                <div className='link'><NavLink to="/challenges">Challenges</NavLink></div>
                <div className='link'><NavLink to="/add-event">Record an Event</NavLink></div>
                <div className='link'><NavLink to="/add-challenge">Start a Challenge</NavLink></div>
                </div>
                  <Routes>
                      <Route exact path="/messages" element={<Messages />} />
                      <Route exact path="/challenges" element={<Challenges />} />
                      <Route exact path="/add-event" element={<AddEvent />} />
                      <Route exact path="/add-challenge" element={<AddChallenge />} />
                      <Route exact path="/" element={<Leaderboard />} />
                  </Routes>
            </BrowserRouter>
        </>
=======
    return (
        <div className="header">
            <Leaderboard />
        </div>
>>>>>>> Stashed changes
    );
}


  
export default App;