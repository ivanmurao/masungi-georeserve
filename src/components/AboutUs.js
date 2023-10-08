import React from 'react';
import './AboutUs.css'; // Create and style this CSS file
import NavigationButtons from '../components/NavigationButtons';

const AboutUs = () => {
  return (
    <div className="about-us">
      <NavigationButtons />
      {/* Add your content, including 2 images */}
      <img src="/aboutus.png" alt="About Image 1" />
      <img src="/last-page.png" alt="About Image 2" />
    </div>
  );
}

export default AboutUs;
