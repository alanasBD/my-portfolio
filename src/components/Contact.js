import React from "react";

const Contact = () => {
  const handleSubmit = event =>{
    event.preventDefault();
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 mx-auto d-flex align-items-center"
            style={{ height: "450px" }}
          >
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn border">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
