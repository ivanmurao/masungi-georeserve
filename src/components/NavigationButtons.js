import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationButtons.css';

const NavigationButtons = () => {
  return (
    <div className="navigation-buttons">
      <NavLink to="/" activeClassName="active">Home</NavLink>
      <NavLink to="/search" activeClassName="active">Search</NavLink>
      <NavLink to="/data" activeClassName="active">Data</NavLink>
      <NavLink to="/explore" activeClassName="active">Explore</NavLink>
      <NavLink to="/forum" activeClassName="active">Forum</NavLink>
      <NavLink to="/about-us" activeClassName="active">About Us</NavLink>
    </div>
  );
}

export default NavigationButtons;
