import React, { useState, ChangeEvent, FormEvent } from "react";
import "./register.css";
// import "../App.css";

const Register = () => {
  return (
    <div className="container">
      {/* <form onSubmit={handleSubmit} className="form"> */}
      <form className="form">
        <fieldset className="fieldset form-control">
          <legend>Register</legend>
          <div className="form-div">
            <label htmlFor="fname">FirstName :</label>
            <input
              type="text"
              id="fname"
              name="fname"
              // value={fname}
              // onChange={handleFnameChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="lname">LastName :</label>
            <input
              type="text"
              id="lname"
              name="lname"
              // value={lname}
              // onChange={handleLnameChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              // value={email}
              // onChange={handleEmailChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              id="address"
              name="address"
              // value={address}
              // onChange={handleAddressChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-div">
            <label htmlFor="dob">Date-of-Birth :</label>
            <input
              type="Date"
              id="dob"
              name="dob"
              // value={dob}
              // onChange={handleDobChange}
              className="form-control"
              required
            />
          </div>
          <div className="gender-control">
            <p>Gender : </p>
            <div className="genderdiv">
              <input
                type="radio"
                id="male"
                name="gender"
                className="form-control"
                required
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                className="form-control"
                required
              />
                <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                className="form-control"
                required
              />
                <label htmlFor="other">Other</label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
