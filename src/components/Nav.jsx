import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
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
              <Link to="/" className="nav-item text-decoration-none">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </Link>
              <Link to="/about" className="nav-item text-decoration-none">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </Link>
              <Link to="/contact us" className="nav-item text-decoration-none">
                <a className="nav-link" href="/">
                  {props.contactText}
                </a>
              </Link>
            </ul>
            {/* <div className="d-flex">
              <div
                className="bg-primary rounded mx-2 "
                onClick={() => props.toggleMode("primary")}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-danger rounded mx-2 "
                onClick={() => props.toggleMode("danger")}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-success rounded mx-2 "
                onClick={() => props.toggleMode("success")}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-warning rounded mx-2 "
                onClick={() => props.toggleMode("warning")}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg-light rounded mx-2 "
                onClick={() => props.toggleMode("light")}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
              <div
                className="bg- rounded mx-2 "
                onClick={() => props.toggleMode("")}
                style={{ height: "30px", width: "30px", cursor: "pointer" }}
              ></div>
            </div> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "grey" : "white"
              }`}
            >
              <input
                onClick={props.toggleMode}
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Toggle Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
