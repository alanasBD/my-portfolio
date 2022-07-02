import React from "react";
import './Skill.css';

const Skill = () => {
  return (
    <div className="container">
      <h2 className="mb-3">My Skills</h2>
      <div className="skill">
        <span className="border rounded-pill px-3 mb-2 py-1 me-2 d-inline-block">HTML5</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">CSS3</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">Bootstrap</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">Tailwind</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block mb-2">Javascript</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">React</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">Node js</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">Express js</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">MongoDB</span>
        <span className="border rounded-pill px-3 py-1 me-2 d-inline-block">Firebase</span>
      </div>
    </div>
  );
};

export default Skill;
