// Forum.js
import React from 'react';
import './Forum.css';
import NavigationButtons from '../components/NavigationButtons';

const Forum = () => {
  return (
    <div className="forum-container">
      <div className="image-container">
        <NavigationButtons/>
        <img src="/social1.png" alt="Forum Image 1" />
        <img src="/impact.png" alt="Forum Image 2" />
        <img src="/trees.png" alt="Forum Image 3" />
        <img src="/last-page.png" alt="Forum Image 4" />
      </div>
    </div>
  );
}

export default Forum;
