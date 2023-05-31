import React from "react";
import logo from "./textlogo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import About from "./About";
export default function Navbar(props) {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
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
          <div className="d-flex ms-auto order-5 mt-2">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
              {isAuthenticated && (
                <li className="nav-item">
                  {" "}
                  <p className="">{user.name}</p>
                </li>
              )}
              {isAuthenticated ? (
                <li className="nav-item">
                  <button
                    className="  btn btn-primary btn-sm mx-3"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <button
                    className=" btn btn-primary btn-sm mx-3"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                </li>
              )}
            </ul>
            <div class="dropdown pt-1">
              <button
                class="btn btn-secondary btn-sm dropdown-toggle mode"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mode
              </button>
              <ul class="dropdown-menu me-2">
                <li className="d-flex align-items-center my-2 ">
                  <button
                    className=" dropdown-item bg-light rounded mx-2"
                    style={{
                      height: "20px",
                      width: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      props.toggleMode("light");
                    }}
                  ></button>
                  <label>light</label>
                </li>
                <li className="d-flex align-items-center my-2 ">
                  <button
                    className=" dropdown-item bg-dark rounded mx-2 "
                    style={{
                      height: "20px",
                      width: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      props.toggleMode("dark");
                    }}
                  ></button>
                  <label>dark</label>
                </li>
                {/* <li>
                {" "}
                <button
                  className=" dropdown-item bg-primary rounded mx-2 "
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  onClick={() => {
                    props.toggleMode("primary");
                  }}
                >
                  <label className=" m-3 my-2">primary</label>
                </button>
              </li>
              <li>
                <button
                  className=" dropdown-item bg-success rounded mx-2"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  onClick={() => {
                    props.toggleMode("success");
                  }}
                >
                  success
                </button>
              </li>
              <li>
                <button
                  className=" dropdown-item bg-danger rounded mx-2"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  onClick={() => {
                    props.toggleMode("danger");
                  }}
                >
                  danger
                </button>
              </li>
              <li>
                <button
                  className=" dropdown-item bg-warning rounded mx-2"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  onClick={() => {
                    props.toggleMode("warning");
                  }}
                >
                  warning
                </button>
              </li>

              <li>
                <button
                  className=" dropdown-item bg-info rounded mx-2"
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                  onClick={() => {
                    props.toggleMode("info");
                  }}
                >
                  info
                </button>
              </li> */}
              </ul>
            </div>
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
