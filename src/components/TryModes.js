import React from "react";
import logo from "./textlogo.svg";
import PropTypes from "prop-types";

export default function TryModes(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="Bootstrap" width="30" height="24" />
          {props.title}
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Contact
              </a>
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
          <div className="btn-group color-modes mx-3" role="group">
            <button
              type="button"
              className="btn btn-primary"
              id="btn1"
              value="primary"
              onClick={props.toggleNewMode}
            >
              Blue
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              value="secondary"
              onClick={props.toggleNewMode}
            >
              grey
            </button>
            <button
              type="button"
              className="btn btn-success"
              value="success"
              onClick={props.toggleNewMode}
            >
              green
            </button>
            <button
              type="button"
              className="btn btn-danger"
              value="danger"
              onClick={props.toggleNewMode}
            >
              red
            </button>
            <button
              type="button"
              className="btn btn-warning"
              value="warning"
              onClick={props.toggleNewMode}
            >
              Yellow
            </button>
            <button
              type="button"
              className="btn btn-info"
              value="info"
              onClick={props.toggleNewMode}
            >
              Info
            </button>
            <button
              type="button"
              className="btn btn-light"
              value="light"
              onClick={props.toggleNewMode}
            >
              Light
            </button>
            <button
              type="button"
              className="btn btn-dark"
              value="dark"
              onClick={props.toggleNewMode}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
