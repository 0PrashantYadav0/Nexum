import React from 'react';
import Navbar from './Navbar';
import './Freelancers.css'

const Freelancers = () => {
  return (
    <>
      <Navbar freelancing={"active"}/>
      <div id="main-content">
        <div class="horizontal-navbar">
            <div class="search-bar">
                <input type="text" class="form-control" placeholder="Search..."/>
                <div class="search-icon">
                    <i class="bi bi-search">
                        <img src="data:image/png;base64,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"
                            alt="Search Icon"/>
                    </i>
                </div>
            </div>
            <div class="profile-dropdown">
                <button class="btn btn-outline-dark" data-bs-toggle="dropdown">
                    <img src="https://via.placeholder.com/30" alt="Profile" class="profile-icon"/>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Profile</a>
                    <a class="dropdown-item" href="#">Settings</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Logout</a>
                </div>
            </div>
        </div>

        <div id="main-content">

            <h1>Your Profile</h1>

            <div class="big-card mt-4">
                <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="prashant.jpeg" class="big-card-image" alt="Image 1"/>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets-images/assets-10.jpg" class="big-card-image" alt="Image 2"/>
                        </div>
                        <div class="carousel-item">
                            <img src="./assets-images/assets12.jpg" class="big-card-image" alt="Image 3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <div class="in-card mt-4">
                    <div class="card-body">
                        <h3 class="card-title">Additional Information</h3>
                        <p class="card-text">Additional details can be placed here...</p>
                    </div>
                </div>
            </div>

            <div class="transparent-card mt-4">
                <div class="card-body d-flex align-items-center">
                    <div class="profile-picture">
                        <img src="Tanmay.jpg" alt="Profile Picture" class="rounded-circle"/>
                    </div>
                    <div class="profile-info">
                        <h3 class="card-title">User Profile</h3>
                        <p class="card-text">Name: Tanmay Deshmukh</p>
                        <p class="card-text">Email: tdeshmukh@gmail.com</p>
                        <p class="card-text">Speciality: Web Development</p>

                    </div>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="small-card">
                        <div class="small-card-body">
                            <h4 class="text-center">Total Sales</h4>
                            <p class="value text-center">143</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="small-card">
                        <div class="small-card-body">
                            <h4 class="text-center">Revenue</h4>
                            <p class="value text-center">$10,000</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="small-card">
                        <div class="small-card-body">
                            <h4 class="text-center">Customers</h4>
                            <p class="value text-center">250</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-md-4">
                    <div class="small-card">
                        <div class="small-card-body">
                            <h4 class="text-center">Orders</h4>
                            <p class="value text-center">75</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="small-card">
                        <div class="small-card-body">
                            <h4 class="text-center">Average Rating</h4>
                            <p class="value text-center">4.8/5</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="small-card">
                        <div class="small-card-body">
                            <h4 class="text-center">Profit</h4>
                            <p class="value text-center">$5,000</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  );
};

export default Freelancers;
