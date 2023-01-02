import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "../component/Home";
import About from "../component/About";
import Service from "../component/Service";
import Portfolio from "../component/Portfolio";
import Blog from "../component/Blog";
import BlogDetails from "../component/BlogDetails";
import Contact from "../component/Contact";
export default class Header extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Preloader Start */}
          <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
              <div className="preloader-inner position-relative">
                <div className="preloader-circle"></div>
                <div className="preloader-img pere-text">
                  <img src="assets/img/logo/loder.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* Preloader Start */}
          <header>
            {/* Header Start */}
            <div className="header-area">
              <div className="main-header  header-sticky">
                <div className="container-fluid">
                  <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-xl-2 col-lg-2 col-md-1">
                      <div className="logo">
                        <Link to="/">
                          <img src="assets/img/logo/logo.png" alt="" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10">
                      <div className="menu-main d-flex align-items-center justify-content-end">
                        {/* Main-menu */}
                        <div className="main-menu f-right d-none d-lg-block">
                          <nav>
                            <ul id="navigation">
                              <li>
                                <Link to="/">Home</Link>
                              </li>
                              <li>
                                <Link to="/about">About</Link>
                              </li>
                              <li>
                                <Link to="/services">Services</Link>
                              </li>
                              <li>
                                <Link to="/portfolio">Portfolio</Link>
                              </li>
                              <li>
                                <a href="#">Page</a>
                                <ul className="submenu">
                                  <li>
                                    <Link to="/blog">Blog</Link>
                                  </li>
                                  <li>
                                    <Link to="/blogDetails">Blog Details</Link>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <Link to="/contact">Contact</Link>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="header-right-btn f-right d-none d-xl-block ml-20">
                          <Link to="/contact" className="btn header-btn">
                            Get Free Consultent
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Mobile Menu */}
                    <div className="col-12">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Header End */}
          </header>
          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/services" element={<Service/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/blogDetails" element={<BlogDetails/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
