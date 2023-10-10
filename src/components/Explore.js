// Explore.js
import React from 'react';
import './Explore.css';
import NavigationButtons from '../components/NavigationButtons';

const Explore = () => {
    const position = [51.505, -0.09];

    
  return (
    <div className="explore-container">
      <div className="image-container">
        <NavigationButtons />
        <img src="/explore.png" alt="Image 1" />
        <img src="/last-page.png" alt="Image 2" />
      </div>
    </div>
  );
};

export default Explore;
