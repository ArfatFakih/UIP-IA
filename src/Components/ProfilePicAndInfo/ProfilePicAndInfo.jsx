import React from 'react'
import '../ProfilePicAndInfo/ProfilePicAndInfo.css'
import profilePic from '../../Components/assets/Ellipse 7.png'

const ProfilePicAndInfo = () => {
  return (
    <div className="profile-picture-info-container">
      <div className="profile-picture-section">
        <img
          src= {profilePic}
          alt="User"
          className="profile-picture"
        />
        <h3 className="username">@User-Name</h3>
        <p className="email">user@email.com</p>
      </div>

      <div className="information-section">
        <h2>Information</h2>
        <p><strong>Name:</strong> Name, Last Name</p>
        <p><strong>Email:</strong> user@email.com</p>
        <p><strong>Tel:</strong> +51 968 696 123</p>
        <p><strong>Plan:</strong> Hardcoded</p>
        <div className="preferences">
          <strong>Preferences:</strong>
          <p>Light/Dark: 
            <input type="checkbox" checked className="toggle-switch" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProfilePicAndInfo