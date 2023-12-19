import React from "react";
import Navbar from "../components/Navbar";

import "../assets/fontawesome.css";
import "../assets/templatemo-style.css";
import "../assets/owl.css";
export default function NewEntry() {
  return (
    <div id="wrapper">
      <div id="main">
        <div class="inner">
          <header id="header">
            <div class="logo">
              <img src="src/assets/orgi.png" width="500" height="200" />
            </div>
          </header>

          <div class="page-heading">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  <h1></h1>
                </div>
              </div>
            </div>
          </div>
          <Navbar />

          <section class="forms">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-6">
                  <div class="section-heading">
                    <h2>NEW ENTRY FORM</h2>
                  </div>
                  <form id="contact" action="" method="post">
                    <div class="row">
                      <div class="col-md-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder=" name"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div class="col-md-12">
                        <select
                          name="category"
                          class="form-control"
                          id="category"
                        >
                          <option value="Gender" selected>
                            Gender
                          </option>
                          <option value="male">Male</option>
                          <option value="male">Female</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <fieldset>
                          <textarea
                            name="Address"
                            rows="3"
                            class="form-control"
                            id="Address"
                            placeholder="Address"
                            required=""
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-md-12">
                        <select
                          name="category"
                          class="form-control"
                          id="category"
                        >
                          <option value="categories" selected>
                            State
                          </option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Goa">Goa</option>
                          <option value="Rajsthan">Rajsthan</option>
                          <option value="karnataka">karnataka</option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <fieldset>
                          <input
                            name="Mobile Number"
                            type="text"
                            class="form-control"
                            id="Address"
                            placeholder="Mobile number"
                            required="10"
                          />
                        </fieldset>
                      </div>
                      <div class="col-md-12">
                        <select
                          name="category"
                          class="form-control"
                          id="category"
                        >
                          <option value="categories" selected>
                            Is Requestor is below Poverty Line
                          </option>
                          <option value="abc">abc </option>
                          <option value="xyz">xyz</option>
                          <option value="pqr">pqr</option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <select
                          name="category"
                          class="form-control"
                          id="category"
                        >
                          <option value="categories" selected>
                            Cityzenship
                          </option>
                          <option value="india">india</option>
                          <option value="other">other</option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <select
                          name="category"
                          class="form-control"
                          id="category"
                        >
                          <option value="categories" selected>
                            Fees Paid Mode
                          </option>
                          <option value="Online">Online </option>
                          <option value="Offline">Offline</option>
                        </select>
                      </div>
                      <div class="col-md-12">
                        <fieldset>
                          <textarea
                            name="Information Sought"
                            rows="6"
                            class="form-control"
                            id="message"
                            placeholder="Information Sought "
                          ></textarea>
                        </fieldset>
                      </div>
                      <div class="col-md-12">
                        <button type="submit" id="form-submit" class="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="col-md-6">
                  <input type="file" accept="application/pdf" />
                  <div id="pdf-preview"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div id="sidebar">
        <div class="inner">
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">DASHBOARD</a>
              </li>

              <li>
                <span class="opener">APPLICATION</span>
                <ul>
                  <li>
                    <a href="newentry.html">New Entry</a>
                  </li>
                  <li>
                    <a href="openentry.html">Open Entry</a>
                  </li>
                </ul>
              </li>

              <span class="opener"> EDIT</span>
              <ul>
                <li>
                  <a href="search_utility.html">Search Utility</a>
                </li>
                <li>
                  <a href="preparation.html">Preparation Reply</a>
                </li>
                <li>
                  <a href="finalreply.html">Generating Final Reply</a>
                </li>
              </ul>
              <span class="opener"> REPORTS</span>
              <ul>
                <li>
                  <a href="#">Closing Application</a>
                </li>
                <li>
                  <a href="#">Receive Reports</a>
                </li>
                <li>
                  <a href="#">Pending To Close</a>
                </li>
              </ul>
              <li>
                <a href="login.html">LOGOUT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
