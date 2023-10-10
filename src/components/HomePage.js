import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import NavigationButtons from './NavigationButtons.js';

const HomePage = () => {
  const navigate = useNavigate(); 

  const navigateToExplore = () => {
    navigate('/explore'); // Redirect to the Explore screen
  };
  
  return (
    <div className="home-page">
      <div className="image-container">
        <NavigationButtons/>
        <img src="/landing-page.png" alt="Image 1" />
        <img src="/second-page.png" alt="Image 2" />
        <img src="/overview.png" alt="Image 3" />
        <img src="/last-page.png" alt="Image 4" />

        <button className="middle-button" onClick={navigateToExplore}>
          Explore
        </button>
      </div>
    </div>
  );
}

export default HomePage;
