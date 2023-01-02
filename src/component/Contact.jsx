import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
export default class Contact extends Component {
  render() {
    return (
      <div>
        <main>
          {/* Hero Start */}
          <div className="slider-area">
            <div className="slider-height2 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap">
                      <h2>Contact Us</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                          <Link to="/">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero End */}
          {/* Contact Info Start */}
          <section
            className="contact-info-area w-padding2"
            data-background="assets/img/gallery/section_bg04.jpg"
          >
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-xl-5 col-lg-7">
                  <div className="contact-caption mb-50">
                    <h3>If Not Now, When? Let’s Work Together!</h3>
                    <p>
                      Consectetur adipiscing elit, sed do eiusmod tempor ididunt
                      ut labore et dolore magna aliqua. Quis ipsum suspendisces
                      gravida. Risus commodo viverra.
                    </p>
                    <img src="assets/img/gallery/sin.png" alt="" />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                  <form action="#" className="contact-wrapper">
                    <input type="text" name="name" placeholder="Full Name" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your Message"
                    ></textarea>
                    <button className="submit-btn2" type="submit">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Info End */}
        </main>
      </div>
    );
  }
}
