import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">HackConnect</div>
      <ul className="navbar-links">
        <li><Link style={{ textDecoration: 'none', color: 'white'}} to='/'>Home</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'white'}} to='/chat'>Chat</Link></li>
        <li>Teams</li>
        <li>Explore Students</li>
        <li><Link style={{ textDecoration: 'none', color: 'white'}} to='/hackathon'>Hackathons</Link></li>
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