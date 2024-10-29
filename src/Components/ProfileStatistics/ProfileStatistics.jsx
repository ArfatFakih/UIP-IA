import React from 'react';
import './ProfileStatistics.css';
import map_image from '../../Components/assets/map_img.png'

const ProfileStatistics = () => {
  return (
    <div className="profile-statistics-container">
      <div className="stat-item">
        <h3>Events Won</h3>
        <p className="stat-value1">1</p>
      </div>
      <div className="stat-item">
        <h3>Events Attempted</h3>
        <p className="stat-value2">17</p>
      </div>
      <div className="stat-item">
        <h3>Rounds Attempted</h3>
        <p className="stat-value3">17</p>
      </div>
      <div className="stat-item">
        <h3>Total Events Registered</h3>
        <p className="stat-value4">18</p>
      </div>
      <div className="map-section">
        <img
          src= {map_image}
          alt="Map"
          className="map-image"
        />
      </div>
    </div>
  );
};

export default ProfileStatistics;
