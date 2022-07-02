import React from "react";
import "./Footer.css";
import git from "../icons/github.png";
import fruits from "../icons/fruits.png";
import air from '../icons/air-condition.png';
import visa from '../icons/visa.png';
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  const handleProject = page =>{
 
    navigate(`/${page}`);
  }
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <h2 className="text-center my-5">My Projects</h2>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 border rounded py-5 mx-2 mt-2">
            <h4>Fruits Warehouse</h4>
            <div style={{ height: "300px" }} className="overflow-hidden mb-2">
              <img className="w-100" src={fruits} alt="" />
            </div>
            <button className="btn border">
              <a
                className="text-decoration-none text-dark"
                href="https://fruits-inventory-f76b8.web.app/"
              >
                Live site
              </a>
            </button>
            <button className="btn border ms-2">
              <a
                className="text-decoration-none text-dark"
                href="https://github.com/alanas59/fruits-warehouse-client"
              >
                <img src={git} alt="" />
                <span className="ms-2">Repo</span>
              </a>
            </button>
            <div className="mt-2">
              <button 
              onClick={()=>handleProject("fruits")}
              className="btn border">See Details</button>
            </div>
          </div>

          <div className="col-lg-3 border rounded py-5 mx-2 mt-2">
            <h4>Air Condition tools</h4>
            <div style={{ height: "300px" }} className="overflow-hidden mb-2">
              <img className="w-100" src={air} alt="" />
            </div>
            <button className="btn border">
              <a
                className="text-decoration-none text-dark"
                href="https://air-condtion-tools.web.app/"
              >
                {" "}
                Live site
              </a>
            </button>
            <button className="btn border ms-2">
              <a
                className="text-decoration-none text-dark"
                href="https://github.com/alanas59/air-condition-tools-client"
              >
                <img src={git} alt="" />
                <span className="ms-2">Repo</span>
              </a>
            </button>
            <div className="mt-2">
              <button
               onClick={()=>handleProject("air-condition")}
               className="btn border">See Details</button>
            </div>
          </div>


          <div className="col-lg-3 border rounded py-5 mx-2 mt-2">
            <h4>BD Visa Consultancy</h4>
            <div style={{ height: "300px" }} className="overflow-hidden mb-2">
              <img className="w-100" src={visa} alt="" />
            </div>
            <button className="btn border">
              <a
                className="text-decoration-none text-dark"
                href="https://visa-consultant.web.app/"
              >
                Live site
              </a>
            </button>
            <button className="btn border ms-2">
              <a
                className="text-decoration-none text-dark"
                href="https://github.com/alanas59/bd-visa-consultancy"
              >
                <img src={git} alt="" />
                <span className="ms-2">Repo</span>
              </a>
            </button>
            <div className="mt-2">
              <button 
              onClick={()=>handleProject("visa")}
              className="btn border">See Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
