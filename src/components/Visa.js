import React from "react";
import visa from '../icons/visa.png';
import login from '../icons/visa-login.png';
import blog from '../icons/visa-blog.png'
const Visa = () => {
  return (
    <div>
      <div className="container">
        <h2 className="my-3">BD Visa Consultancy</h2>
        <div className="row">
            <div className="col-lg-6">
               <img className="w-100" src={visa} alt="" />
            </div>
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-12">
                      <img className="w-100" src={login} alt="" />
                    </div>
                    <div className="col-lg-12 overflow-hidden mt-3" style={{height:"400px"}}>
                       <img className="w-100" src={blog} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <h2 className="my-3">Project Details</h2>
        <ul>
            <li>In Home page user can can stock update of any fruit product.</li>
            <li>In Inventory page user can deliverd and increase quantity.</li>
            <li>In Manage page a user can manage products and he can delete any product .</li>
            <li>In Add item page a user an insert an new product.</li>
            <li>In login page any one can access this website by using his email and password.He can easily access by using sign i with google.</li>
            <li>In Registration page an user can complete his registration.</li>
        </ul>
      </div>
    </div>
  );
};

export default Visa;
