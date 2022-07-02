import React from "react";
import "animate.css";
import "./Home.css";
import Slider from "./Slider";
import Projects from "./Projects";

const data = "a Mern Stack Web Developer";
const Home = () => {
  return (
    <div className="container">
      <div className="col-lg-6 mt-1 mx-auto text-center">
        <h2 className="mb-3">Abdullah Al Anas</h2>
        <h5 className="mb-4">I am a Mern Stack Web Developer</h5>
        <Slider></Slider>
      </div>
      <Projects></Projects>
    </div>
  );
};

export default Home;
