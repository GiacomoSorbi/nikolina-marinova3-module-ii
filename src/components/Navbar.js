import React, { Component } from "react";
import logo from "../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  manageToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Flower bulbs" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              aria-label="menu"
              onClick={this.manageToggle}
            >
              <GiHamburgerMenu className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/flowers">Flowers</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
