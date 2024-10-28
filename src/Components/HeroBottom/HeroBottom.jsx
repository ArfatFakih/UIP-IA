import React from 'react'
import '../HeroBottom/HeroBottom.css'
import dynamic_icon from '../assets/Group 4.png'
import dynamic_icon1 from '../assets/Mask group1.png'
import dynamic_icon2 from '../assets/Mask group2.png'

const HeroBottom = () => {
  return (
    <div className="bottom-section">
      <div className="card">
        <img src={dynamic_icon} alt="Profile Icon" className="icon" />
        <div className="card1">
            <h3>Create a Dynamic Profile</h3>
            <p>Showcase your skills, achievements, and hackathon experience. Highlight past projects and upcoming hackathons you're excited for!</p>
        </div>
        <div class="vl"></div>
      </div>
      <div className="card">
        <img src={dynamic_icon1} alt="Team Icon" className="icon" />
        <div className="card1">
            <h3>Team Recommendations</h3>
            <p>Get personalized team suggestions tailored to your profile, finding the ideal mix of skills and personalities for success!</p>
        </div>
        <div class="vl"></div>
      </div>
      <div className="card">
        <img src={dynamic_icon2} alt="Trophy Icon" className="icon" />
        <div className="card1">
            <h3>Hackathon Updates</h3>
            <p>Stay updated on the latest hackathons and never miss a chance to join or form a team!</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBottom