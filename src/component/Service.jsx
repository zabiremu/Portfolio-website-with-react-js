import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

export default class Service extends Component {
  render() {
    return (
      <div>
        <main>
          {/* Header Start */}
          <div className="slider-area ">
            <div className="slider-height2 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap">
                      <h2>My Services</h2>
                      <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to="services">My Services</Link>
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Header End */}
          {/* Categories Area Start */}
          <section className="categories-area categories-area2  section-padding30">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-pen"></span>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">UI/UX Design</a>
                      </h5>
                      <p>
                        Free resource that will help nderstand thecv designc
                        process and improve theroi nderstand the design process
                        andisei impro are of vquality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-speaker"></span>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">Digital Marketing</a>
                      </h5>
                      <p>
                        Free resource that will help nderstand thecv designc
                        process and improve theroi nderstand the design process
                        andisei impro are of vquality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-portfolio"></span>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">Website Design</a>
                      </h5>
                      <p>
                        Free resource that will help nderstand thecv designc
                        process and improve theroi nderstand the design process
                        andisei impro are of vquality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-portfolio"></span>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">Website Design</a>
                      </h5>
                      <p>
                        Free resource that will help nderstand thecv designc
                        process and improve theroi nderstand the design process
                        andisei impro are of vquality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-speaker"></span>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">Digital Marketing</a>
                      </h5>
                      <p>
                        Free resource that will help nderstand thecv designc
                        process and improve theroi nderstand the design process
                        andisei impro are of vquality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6">
                  <div className="single-cat text-center mb-50">
                    <div className="cat-icon">
                      <span className="flaticon-pen"></span>
                    </div>
                    <div className="cat-cap">
                      <h5>
                        <a href="services.html">UI/UX Design</a>
                      </h5>
                      <p>
                        Free resource that will help nderstand thecv designc
                        process and improve theroi nderstand the design process
                        andisei impro are of vquality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Categories Area End */}
          {/* Want To Work Start */}
          <section className="wantToWork-area w-padding2">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 col-lg-8 col-md-8">
                  <div className="wantToWork-caption wantToWork-caption2">
                    <h2>Dont worry for contact i`m available</h2>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <a href="#" className="btn btn-black f-right">
                  <Link to="/contact">Contact Me Now</Link>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Want To Work End */}
          {/* Contact Info Start */}
          <div
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
          </div>
          {/* Contact Info End */}
        </main>
      </div>
    );
  }
}
