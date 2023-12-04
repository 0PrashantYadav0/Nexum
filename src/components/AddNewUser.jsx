// AddNewUser.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import './AddNewUser.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

const AddNewUser = () => {
  function addWorker() {
    const name = document.getElementById("workerName").value;
    const skills = document.getElementById("workerSkills").value;
    const adhaarNumber = document.getElementById("adhaarnumber").value;
    const phoneNumber = document.getElementById("phonenumber").value;

    const table = document.getElementById("workerTable");
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.innerHTML = name;
    cell2.innerHTML = skills;
    cell3.innerHTML = adhaarNumber;
    cell4.innerHTML = phoneNumber;

    document.getElementById("workerForm").reset();
  }
  function addEmployer() {
    const name = document.getElementById("employerName").value;
    const skills = document.getElementById("work").value;
    const phoneNumber = document.getElementById("phonenumber2").value;

    const table = document.getElementById("employerTable");
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    cell1.innerHTML = name;
    cell2.innerHTML = skills;
    cell3.innerHTML = phoneNumber;

    document.getElementById("employerForm").reset();
  }
  return (
    <>
      <Navbar register={"active"} />
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./image.jpg" class="d-block w-100" alt="Worker Image" />
            <div class="carousel-caption info-container">
              <h2>Worker Registration</h2>
              <p>Connect with employers by registering as a worker.</p>
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#workerModal"
              >
                Register as Worker
              </button>
            </div>
          </div>

          <div class="carousel-item">
            <img src="./image2.jpg" class="d-block w-100" alt="Worker Image" />
            <div class="carousel-caption info-container">
              <h2>Employer Registration</h2>
              <p>Hire workers by registering as an employer.</p>
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#employerModal"
              >
                Register as Employer
              </button>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div
        class="modal fade"
        id="employerModal"
        tabindex="-1"
        aria-labelledby="employerModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="employerModalLabel">
                Employer Registration
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <header>
                <h2>Add Employer</h2>
              </header>
              <form class="bg-light p-4 rounded" id="employerForm">
                <div class="mb-3">
                  <label for="workerName" class="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="employerName"
                    name="workerName"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="workerSkills" class="form-label">
                    Work Needed
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="work"
                    name="workerSkills"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="phonenumber" class="form-label">
                    Phone number:
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="phonenumber2"
                    name="phonenumber2"
                    required
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  onclick="addEmployer()"
                >
                  Add Employer
                </button>
              </form>
            </div>
            <section>
              <table class="table table-bordered" id="employerTable">
                <thead class="thead-dark">
                  <tr>
                    <th>Employer Name</th>
                    <th>Work Needed</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewUser;
