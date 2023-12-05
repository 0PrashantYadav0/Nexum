import React from "react";
import Navbar from "./Navbar";
import './Freelancers.css'

export default function Freelancers() {
  return (
    <div>
      <Navbar freelancing={"active"} />
      <header id="head">
        <h1>Hire the Freelancers for any job,online.</h1>

        <li class="info"> Largest marketplace</li>

        <li class="info"> Any job you can possibly think of</li>

        <li class="info"> Pay only when you are 100% happy</li>

        <br />
        <br />
        <div>
          <button id="but1">Hire a freelancer</button>
          <button id="but2">Earn money freelancing</button>
        </div>
      </header>
      <div className="main_lanc_body">
      <div class="text3">
        <h1 id="text1">Make it real</h1>
        <h1 id="text2">with Freelancer</h1>
      </div>
      <div class="main-box">
        <div class="container">
          <div class="box">
            <h2>The best talent</h2>
            <p>
              Discover reliable professionals by exploring their portfolios and
              immersing yourself in the feedback shared on their profiles.
            </p>
          </div>
          <div class="box">
            <h2>Fast bids</h2>
            <p>
              Get quick, no-obligation quotes from skilled freelancers. 80% of
              jobs receive bids within 60 seconds. Your idea is just moments
              from reality.
            </p>
          </div>

          <div class="box">
            <h2>Quality work</h2>
            <p>
              With Freelancer's talent pool of over 60 million professionals at
              your fingertips, you'll find quality talent to get what you need
              done.
            </p>
          </div>

          <div class="box">
            <h2>Be in control</h2>
            <p>
              Stay in the loop while on the move. Chat with your freelancers and
              get real time updates with our mobile app. Anytime, anywhere.
            </p>
          </div>
        </div>
        <div class="box1">
          <h2 id="h2">Make your dreams a reality.</h2>
          <a href="#" id="a1">
            Get Started: &rarr;
          </a>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="web_freelancer_image.jpeg"
                class="card-img-top"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <h5 class="card-title">Freelancer 1</h5>
                <p class="card-text">Skills: Web Development, Graphic Design</p>
                <p class="card-text">
                  Description: Experienced freelancer with skills in web
                  development and graphic design.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="app_development_image.jpeg"
                class="card-img-top"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <h5 class="card-title">Freelancer 2</h5>
                <p class="card-text">
                  Skills: Mobile App Development, UI/UX Design
                </p>
                <p class="card-text">
                  Description: Creative freelancer specializing in mobile app
                  development and UI/UX design.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="content_writing.jpeg"
                class="card-img-top"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <h5 class="card-title">Freelancer 3</h5>
                <p class="card-text">Skills: Writing, Content Creation</p>
                <p class="card-text">
                  Description: Versatile freelancer with strong writing and
                  content creation skills.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="web_development_&_design.jpeg"
                class="card-img-top"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">Category: Web Design</p>
                <p class="card-text">
                  Description: A visually stunning website showcasing modern web
                  design trends.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="camera_image.jpeg"
                class="card-img-top"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">Category: Photography</p>
                <p class="card-text">
                  Description: A collection of breathtaking photographs
                  capturing nature's beauty.
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="digital_art_image.webp"
                class="card-img-top"
                alt="Placeholder Image"
              />
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">Category: Digital Art</p>
                <p class="card-text">
                  Description: Digital artworks exploring the intersection of
                  technology and creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
