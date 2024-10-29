import React from 'react';
import '../HackathonCard/HackathonCard.css';

const HackathonCard = ({ title, description, image, quickApply, knowMore }) => {
  return (
    <div className="hackathon-card">
      <div className="hackathon-card-image">
        <img src={image} alt={`${title} Hackathon`} />
      </div>
      <div className="hackathon-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="hackathon-card-buttons">
          <button className="quick-apply">{quickApply}</button>
          <button className="know-more">{knowMore}</button>
        </div>
      </div>
    </div>
  );
};

export default HackathonCard;
