import React from 'react'
import '../Sidebar/Sidebar.css'
import profile_edit from '../assets/Edit Profile.png'
import profile_pic from '../assets/Ellipse 7.png'
import home_pic from '../assets/Smart Home Shield.png'
import teams_pic from '../assets/People.png'
import message_pic from '../assets/Chat.png'
import explore_pic from '../assets/Compass.png'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src= {profile_pic} alt="Profile" />
        <h3>Nikita Sharma</h3>
        <p>@nikki.ui</p>
      </div>
      <nav>
        <ul>
          <li>
            <img src= {profile_edit} alt="Profile" />
            Profile
          </li>
          <li>
            <Link style={{ textDecoration: 'none', color: 'white'}} to='/'>
              <img src= {home_pic} alt="Home" />
              Home
            </Link>
          </li>
          <li>
            <img src= {teams_pic} alt="Teams" />
            Teams
          </li>
          <li>
            <img src= {profile_edit} alt="Hackthons" />
            Hackthons
          </li>
          <li>
            <img src= {message_pic} alt="Messages" />
            Messages
          </li>
          <li>
            <img src= {explore_pic} alt="Explore peers" />
            Explore peers
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar