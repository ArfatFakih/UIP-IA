import React, { useState, useEffect } from 'react';
import '../Hackathon/Hackathon.css';
import HackathonCard from '../HackathonCard/HackathonCard';
import hackathonImage from '../assets/hackathon_img.png';
import hackathonImage1 from '../assets/hackathon1_img.png';
import hackathonImage2 from '../assets/hackathon2_img.png';
import hackathonImage3 from '../assets/hackathon3_img.png';
import hackathonImage4 from '../assets/hackathon4_img.png';
import { FaSearch } from 'react-icons/fa';
import puzzleImage from '../assets/puzzle_img.png';
import arrow_left from '../assets/arrow_left.png';
import arrow_right from '../assets/arrow_right.png';

const Hackathon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numCardsVisible, setNumCardsVisible] = useState(3);

  const hackathons = [
    {
      title: 'TechSprint 2024',
      description: 'A 48-hour hackathon focused on developing innovative FinTech solutions for the banking industry.',
      image: hackathonImage,
      quickApply: 'Quick Apply',
      knowMore: 'Know More',
    },
    {
      title: 'HealthTech Innovate',
      description: 'A 36-hour healthcare hackathon focused on telemedicine, and AI-driven diagnostic tools to assist doctors and patients.',
      image: hackathonImage1,
      quickApply: 'Quick Apply',
      knowMore: 'Know More',
    },
    {
      title: 'Green Earth Hack',
      description: 'An environmental hackathon centered on creating technology that promotes sustainability.',
      image: hackathonImage2,
      quickApply: 'Quick Apply',
      knowMore: 'Know More',
    },
    {
      title: 'AgriTech Summit',
      description: 'A hackathon focused on developing tech solutions for agriculture and food sustainability.',
      image: hackathonImage3,
      quickApply: 'Quick Apply',
      knowMore: 'Know More',
    },
    {
      title: 'Smart City Hack',
      description: 'A 24-hour hackathon to create solutions for smarter,good, safer, and more sustainable cities.',
      image: hackathonImage4,
      quickApply: 'Quick Apply',
      knowMore: 'Know More',
    },
  ];

  useEffect(() => {
    const updateNumCardsVisible = () => {
      if (window.innerWidth >= 1024) {
        setNumCardsVisible(3);
      } else if (window.innerWidth >= 768) {
        setNumCardsVisible(2);
      } else {
        setNumCardsVisible(1);
      }
    };

    updateNumCardsVisible();
    window.addEventListener('resize', updateNumCardsVisible);
    return () => window.removeEventListener('resize', updateNumCardsVisible);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? hackathons.length - numCardsVisible : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + numCardsVisible >= hackathons.length ? 0 : prevIndex + 1
    );
  };

  const visibleHackathons = hackathons.slice(currentIndex, currentIndex + numCardsVisible);

  return (
    <div className="hackathon-section">
      <div className="header-container">
        <div className="search-bar-container">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search here" className="search-bar" />
        </div>
        <button className="bootcamp-button">Join our boot camp</button>
      </div>
      
      <div className="intro-section">
        <div className="intro-text">
          <h2>Unlock Your Potential: Join a Hackathon!</h2>
          <p>
            Hackathons are an excellent platform to transform your creative ideas into real-world solutions. These collaborative events teach essential skills like teamwork and communication as you work with diverse individuals to tackle complex problems. You’ll enhance your creative thinking and adaptability while gaining valuable experience for your resume. Most importantly, you’ll have fun pushing your limits. So, step out of your comfort zone, embrace the challenge, and discover what you're truly capable of!
          </p>
        </div>
        <img src={puzzleImage} alt="Puzzle piece" className="puzzle-image" />
      </div>
      <div className="last-bottom-part">
        <div className="hackathon-grid">
          {visibleHackathons.map((hackathon, index) => (
            <HackathonCard
              key={index}
              title={hackathon.title}
              description={hackathon.description}
              image={hackathon.image}
              quickApply={hackathon.quickApply}
              knowMore={hackathon.knowMore}
            />
          ))}
        </div>

        <div className="carousel-navigation">
          <img
            src={arrow_left}
            alt="Previous"
            onClick={handlePrev}
            className="nav-image"
          />
          <div className="carousel-indicators">
            {Array.from({ length: Math.ceil(hackathons.length / numCardsVisible) }).map((_, index) => (
              <span
                key={index}
                className={`indicator-dot ${index === Math.floor(currentIndex / numCardsVisible) ? 'active' : ''}`}
              ></span>
            ))}
          </div>
          <img
            src={arrow_right}
            alt="Next"
            onClick={handleNext}
            className="nav-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
