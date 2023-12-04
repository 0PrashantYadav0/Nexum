// Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({home, freelancing, dailyworker, aboutus, register, contactus, dashboard}) => {
  return (
    <>
    <nav className='d-flex justify-content-end'>
    <div class="search-container">
      <input type="text" placeholder="Search..."/>
      <button type="submit">Search</button>
    </div>
  </nav>
    <div class="vertical-navbar">
        <div class="navbar-brand">Nexum</div>
        <a href="/home" class={home}>Home</a>
        <a href="/dashboard" class={dashboard}>Dashboard</a>
        <a href="/freelancing" class={freelancing}>Freelancers</a>
        <a href="/display-user-data" class={dailyworker}>Daily Workers</a>
        <a href="/about-us" class={aboutus}>About Us</a>
        <a href="/add-new-user" class={register}>Register</a>
        <a href="/contactus" class={contactus}>Contact Us</a>
    </div>
  </>
  );
};

export default Navbar;
