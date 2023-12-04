// AboutUs.js
import React from 'react';
import Navbar from './Navbar';
import './Aboutus.css';

const AboutUs = () => {
  function toggleDetails(personId) {
    var details = document.getElementById(personId);
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }

  // Function to show enlarged image in a modal
  function showImageModal(imageSrc) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;

    // Blur the background
    document.body.classList.add('blur');

    // Close the modal when clicked outside the image
    modal.onclick = function() {
      modal.style.display = 'none';
      document.body.classList.remove('blur');
    };
  }
  return (<>
  <Navbar aboutus={"active"}/>
  <div class="container">
    <h1 class="heading">ABOUT US</h1>
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="card" onclick="toggleDetails('person1')">
          <img src="Tanmay.jpeg" class="card-img-top" alt="Person 1"/>
          <div class="card-body">
            <h5 class="card-title">Tanmay Deshmukh</h5>
            <p class="card-text">LCB2023022</p>
            <div class="card-details" id="person1">
              <p>Email: tanmay21@gmail.com</p>
              <p>Phone: +91 80104-13606</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card" onclick="toggleDetails('person2')">
          <img src="Dishant.jpeg" class="card-img-top" alt="Person 2"/>
          <div class="card-body">
            <h5 class="card-title">Dishant Garg</h5>
            <p class="card-text">LCB2023011</p>
            <div class="card-details" id="person2">
              <p>Email: dishant23@gmail</p>
              <p>Phone: +91 98176-13678</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card" onclick="toggleDetails('person3')">
          <img src="Digvijay.jpeg" class="card-img-top" alt="Person 3"/>
          <div class="card-body">
            <h5 class="card-title">Digvijay Deshmukh</h5>
            <p class="card-text">LCI2023012</p>
            <div class="card-details" id="person3">
              <p>Email: digvijay22@gmail.com</p>
              <p>Phone:+91 94666-49066</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card" onclick="toggleDetails('person4')">
          <img src="Prashant.jpeg" class="card-img-top" alt="Person 4"/>
          <div class="card-body">
            <h5 class="card-title">Prashant Kumar Yadav</h5>
            <p class="card-text">LCI2023025</p>
            <div class="card-details" id="person4">
              <p>Email: prashant52@gmail.com</p>
              <p>Phone: +91 81988-62356</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card" onclick="toggleDetails('person5')">
          <img src="Akhand.jpeg" class="card-img-top" alt="Person 5"/>
          <div class="card-body">
            <h5 class="card-title">Akhand Pratap Dhiryan</h5>
            <p class="card-text">LCI2023022</p>
            <div class="card-details" id="person5">
              <p>Email: akhandp22@gmail.com</p>
              <p>Phone: 987-654-3210</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="card" onclick="toggleDetails('person6')">
          <img src="Pratham.jpeg" class="card-img-top" alt="Person 6"/>
          <div class="card-body">
            <h5 class="card-title">Pratham Hole</h5>
            <p class="card-text">LCB2023003</p>
            <div class="card-details" id="person6">
              <p>Email: pratham32@gmail.com</p>
              <p>Phone:+91 95526-38515</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mx-auto">
        <div class="card" onclick="toggleDetails('person7')">
          <img src="Ashwin.jpeg" class="card-img-top" alt="Person 7"/>
          <div class="card-body">
            <h5 class="card-title">Ashwin Gajbhiye</h5>
            <p class="card-text">LCB2023023</p>
            <div class="card-details" id="person7">
              <p>Email: ashwing14@gmail.com</p>
              <p>Phone: +91 7757-948048</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>

  );
};

export default AboutUs;
