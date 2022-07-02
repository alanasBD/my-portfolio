import React from "react";
import logo from "../icons/web-logo.png";
import logo1 from "../icons/logo-1.png";
import logo2 from "../icons/logo-2.png";

const Slider = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item  active">
          <img style={{ width: "450px" }} src={logo2} class="" alt="..." />
        </div>
        <div class="carousel-item text-center">
          <img style={{ width: "450px" }} src={logo} class="" alt="..." />
        </div>
        <div class="carousel-item">
          <img style={{ width: "430px" }} src={logo1} class="" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Slider;
