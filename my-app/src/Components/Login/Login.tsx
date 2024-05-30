import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

interface LoginData {
  email: string;
  password: string;
}



const Login: React.FC = () => {
  console.log(document.cookie, "cookeei");
  const navigate = useNavigate();
  const [error, setError] = useState("")
  const [LoginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    console.log(LoginData);
    const result = await axios.get(`http://localhost:3036/checkuser/${LoginData.email}/${LoginData.password}`, { withCredentials: true });
    // console.log(result.data.token, "token");
    console.log(result.data.msg);
    const res = result.data.msg;
    if (res === "Success") {
      navigate("/form");
    } else if (res === "wrong Data") {
      setError("wrong Data!!")
    } else {
      setError("No data found!!")
    }
  };
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>
        <div className="form-div">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={LoginData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-div">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={LoginData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <p id="loginbtn" onClick={handleSubmit}>
          Login
        </p>

        <div className="flex">
          <p>Don't have an Acoount? <Link to="/">Register</Link></p>
        </div>
        <p id="error">{error}</p>
      </form>
    </div>
  );
};

export default Login;