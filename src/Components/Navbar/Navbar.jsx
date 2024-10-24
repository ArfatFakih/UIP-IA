import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">HackConnect</div>
      <ul className="navbar-links">
        <li>Chat</li>
        <li>Teams</li>
        <li>Explore Students</li>
        <li>Hackathons</li>
        <li>My Profile</li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-btn">LOGIN</button>
        <button className="signup-btn">Sign UP</button>
      </div>
    </nav>
  )
}

export default Navbar