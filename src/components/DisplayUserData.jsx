// DisplayUserData.js
import React from "react";
import Navbar from "./Navbar";
import "./DisplayUserData.css";

const DisplayUserData = () => {
  let userarray = [
    {
      username: "Name",
      task: "painter",
      phoneno: 9041518713782,
    },
    {
      username: "Name1",
      task: "painter",
      phoneno: 9041518713782,
    },
    {
      username: "Name2",
      task: "painter",
      phoneno: 9041518713782,
    },
    {
      username: "Name3",
      task: "painter",
      phoneno: 9041518713782,
    },
    {
      username: "Name4",
      task: "painter",
      phoneno: 9041518713782,
    },
    {
      username: "Name5",
      task: "painter",
      phoneno: 9041518713782,
    },
  ];

  return (
    <div>
      <Navbar dailyworker={"active"} />
      <div class="abc">
        <div
          class="modal fade"
          id="contactModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="contactModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="contactModalLabel">
                  Contact Worker
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="reason">Reason for contact:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="reason"
                      placeholder="Enter reason"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="contactNo">Contact Number:</label>
                    <input
                      type="tel"
                      class="form-control"
                      id="contactNo"
                      placeholder="Enter contact number"
                      required
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            {userarray.map((value, i) => (
              <div class="card">
                <img src="w1.webp" class="card-img-top" alt="Worker 1" />
                <div class="card-body">
                  <h5 class="card-title">{value.username}</h5>
                  <p class="card-text">{value.task}</p>
                  <div class="info-dropdown">
                    <button
                      class="btn btn-primary"
                      data-toggle="modal"
                      data-target="#contactModal"
                    >
                      Contact
                    </button>
                    <div class="info-dropdown-content">
                      Mobile: {value.phoneno}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayUserData;
