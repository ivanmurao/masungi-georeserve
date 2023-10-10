import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Explore from './components/Explore';
import Forum from './components/Forum';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about-us" element={<AboutUs />} /> 
      </Routes>
    </Router>
  );
}

export default App;

