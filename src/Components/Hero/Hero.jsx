import React from 'react'
import home_image from '../assets/Mask group.png'
import '../Hero/Hero.css'
import arrowImage from '../assets/arrow_img.png'

const Hero = () => {
  return (
    <div className="middle-section">
      <div className="welcome-text">
        <h1>
          Welcome to <span className="highlight">HackConnect!</span><br />
          Where Innovation Meets <span className="highlight">Collaboration</span>
        </h1>
        <p>
          Are you a student looking for a team to tackle the next big hackathon? 
          Whether you're an experienced coder, a creative designer, or a strategic thinker, 
          HackConnect is here to help you find the perfect teammates. Our platform connects 
          students from various colleges and backgrounds to form diverse, high-performing hackathon teams.
        </p>
        <div className="build-your-team-container">
          <button className="build-team-btn">
            Build Your Team
          </button>
          <div className="arrow-container">
            <img src={arrowImage} alt="Arrow" className="arrow-image" />  
          </div>
        </div>
      </div>
      <div className="welcome-image">
        {/* Image can be imported and displayed */}
        <img src= {home_image} alt="Team Collaboration" />
      </div>
    </div>
  )
}

export default Hero