import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";
import { RegData } from "../interfacefile";

const Register: React.FC = () => {

  let navigate: NavigateFunction = useNavigate();
  const [display, setDisplay] = useState(false);
  const [error, setError] = useState("")
  const [actcode, setactcode] = useState("");
  const [id, setid] = useState("")
  const [RegData, setRegData] = useState<RegData>({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    gender: "",
    bd: "",
  });
  const changepage = () => {
    navigate(`/activate/${actcode}`, { state: { user_id: id, actcode: actcode } })
  }
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
    setError("")
    axios({
      url: "http://localhost:3036/register",
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        RegData
      }),
    })
      .then(async (res) => {
        let result = await res.data;
        if (result.message === "success") {
          setid(result.user_id);
          setactcode(result.actcode);
          setDisplay(true);
        } else if (result.message === "failed") {
          setError("something wrong!!")
        }

      })
      .catch((err) => console.log(err));
  }
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
        {display && <div className="activatebtn">
          <p onClick={changepage}>Click Here</p>
        </div>}
        <p id="error">{error}</p>
      </form>
    </div>
  );
};
export default Register;
function now() {
  throw new Error("Function not implemented.");
}

