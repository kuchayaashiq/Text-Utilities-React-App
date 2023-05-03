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
              <Link className="nav-link" aria-current="page" to="/">
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
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          {/* <div className="gcse-search"></div> google search engine */}
          <div className="d-flex">
            <button
              className="bg-primary rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("primary");
              }}
            ></button>
            <button
              className="bg-success rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("success");
              }}
            ></button>
            <button
              className="bg-danger rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("danger");
              }}
            ></button>
            <button
              className="bg-warning rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("warning");
              }}
            ></button>
            <button
              className="bg-light rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("light");
              }}
            ></button>
            <button
              className="bg-dark rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("dark");
              }}
            ></button>
            <button
              className="bg-info rounded mx-2"
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={() => {
                props.toggleMode("info");
              }}
            ></button>
            <label
              className={`form-check-label text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
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
