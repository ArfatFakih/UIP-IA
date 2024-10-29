import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">HackConnect</div>
      <ul className="navbar-links">
        <li><Link style={{ textDecoration: 'none', color: 'white'}} to='/'>Home</Link></li>
        <li>Chat</li>
        <li>Teams</li>
        <li>Explore Students</li>
        <li><Link style={{ textDecoration: 'none', color: 'white'}} to='/hackathon'>Hackathons</Link></li>
        <li><Link style={{ textDecoration: 'none', color: 'white'}} to='/profile'>My Profile</Link></li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-btn"><Link style={{ textDecoration: 'none', color: 'white'}} to='/login'>LOGIN</Link></button>
        <button className="signup-btn"><Link style={{ textDecoration: 'none', color: 'black'}} to='/signup'>Sign UP</Link></button>
      </div>
    </nav>
  )
}

export default Navbar