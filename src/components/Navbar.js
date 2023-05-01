import React from "react";
import logo from "./textlogo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import About from "./About";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Bootstrap" width="30" height="24" />
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/contact">
                Contact
              </Link>
            </li>
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
          {/* <div className="btn-group color-modes mx-3" role="group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.toggleNewMode}
            >
              Blue
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.toggleNewMode}
            >
              grey
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={props.toggleNewMode}
            >
              green
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={props.toggleNewMode}
            >
              red
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={props.toggleNewMode}
            >
              Yellow
            </button>
            <button
              type="button"
              className="btn btn-info"
              onClick={props.toggleNewMode}
            >
              Info
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={props.toggleNewMode}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={props.toggleNewMode}
            >
              Dark
            </button>
          </div> */}
          <div
            className={`form-check form-switch mx-3 text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Title text here",
  aboutText: "About text here",
};
