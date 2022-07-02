import React from "react";
import "./Footer.css";
import facebook from "../icons/facebook.png";
import github from "../icons/github.png";
import linkedin from "../icons/linkedin.png";

const Footer = () => {
  return (
    <div className="footer  mt-5 mb-3">
      <div className="container border-top">
        <div class="row mt-2">
          <div className="col-lg-3">
            <h5 style={{fontWeight:"400"}}>Phone</h5>
            <p>+8801631426766</p>
          </div>
          <div className="col-lg-3">
            <h5 style={{fontWeight:"400"}}>Email</h5>
            <p>alanas7171@gmail.com</p>
          </div>

          <div className="col-lg-3 follow">
            <h5 style={{fontWeight:"400"}}>Follow Me</h5>
            <a href="https://www.facebook.com/alanas59">
              <img src={facebook} alt="..." />
            </a>
            <a href="https://github.com/alanas59">
              <img src={github} alt="..." />
            </a>
            <a href="https://www.linkedin.com/in/al-anas17/">
              <img src={linkedin} alt="..." />
            </a>
          </div>
          <div className="col-lg-3 d-flex align-items-center mt-3">
            <small>© 2022 By Al Anas.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
