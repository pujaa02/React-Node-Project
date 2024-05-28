import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./register.css";

interface RegisterFormProps {
  onRegister: (RegData: RegData) => void;
}
interface RegData {
  fname: string;
  lname: string;
  email: string;
  phone: string;
  gender: string,
  bd: string;
}
const Register: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [RegData, setRegData] = useState<RegData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    bd: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    onRegister(RegData);
  };
  return (
    <div className="register-form-container">
      <h2>Registration Page</h2>
      <form onSubmit={handleRegister} className="register-form">
        <div className="row">
          <div className="form-group">
            <label htmlFor="fname">First Name:</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={RegData.fname}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name:</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={RegData.lname}
              onChange={handleChange}

              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={RegData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={RegData.phone}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <label htmlFor="bd">DOB:</label>
            <input
              type="date"
              id="bd"
              name="bd"
              value={RegData.bd}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="formgender">
            <label >Gender:</label> <br />
            <div className="genderflex">
              <div className="radio">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={RegData.gender === "male"}
                  onChange={handleChange}
                  className="form-control"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  checked={RegData.gender === "female"}
                  className="form-control"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="radio">
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={handleChange}
                  checked={RegData.gender === "other"}
                  className="form-control"
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <div className="flex">
          <p>Already Have an Account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
  );
};
export default Register;
