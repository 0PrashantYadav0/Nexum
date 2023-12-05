// Freelancers.js
import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <div className="content">
          <h1>Welcome to Your Freelancing Platform</h1>
          <p>Connecting Freelancers and Daily Wage Workers</p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;