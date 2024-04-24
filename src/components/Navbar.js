import React from 'react';
import home from "./Homepage"
import About from "./About"
import Portfolio from './Portfolio';
import Skills from './Skills';
import Testimonials from './Testimonials';
import Resume from './Resume';
import Contact from './Contact';
import "./Navbarst.css"

class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontFamily: 'Times New Roman', fontSize: 'x-large'}}>
      <b>Shivansh Gupta</b>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#Home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Portfolio">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Skills">
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Testimonials">
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Resume">
            Resume
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#Contact"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Contact
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="https://www.linkedin.com/in/shivansh-gupta-774400217/" target='_blank'>
                LinkedIn
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="https://www.instagram.com/shivansh_gpta/" target='_blank'>
                Instagram
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#Contact">
                Contact Page
              </a>
            </li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

        );
    }
}
 
export default Navbar;


