import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* dekstop header */}
      <div className="header mt-3">
        <Link className="mb-2 d-inline-block" to="/home">
          Home
        </Link>
        <Link className="mb-3 d-inline-block" to="/about">
          About
        </Link>
        <Link className="mb-3 d-inline-block" to="/contact">
          Contact Me
        </Link>
        <Link className="mb-3 d-inline-block" to="/blogs">
          Blogs
        </Link>
        <a
          className="border  p-2 rounded"
          target={`_blank`}
          href="https://drive.google.com/file/d/1_OKNKdS_3Ew1hEWwb1wWcYH9zxtpQh91/view?usp=sharing"
        >
          Resume
        </a>
      </div>

      {/* mobile header */}
      <nav className="navbar navbar-expand-lg navbar-light mobile-nav d-none">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Al Anas
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
               
                  to="/contact"
                >
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="border p-2 rounded mobile-header"
                  target={`_blank`}
                  href="https://drive.google.com/file/d/1_OKNKdS_3Ew1hEWwb1wWcYH9zxtpQh91/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
