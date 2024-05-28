import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Form from "./Components/Form/Form";
import Activate from "./Components/Password/Activate";
import Password from "./Components/Password/Password";

interface ApplicationFormData {
  fname: string;
  lname: string;
  designation: string;
  email: string;
  phone: string;
  gender: string,
  rel_status: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  bd: string;
}
interface RegisterData {
  fname: string;
  lname: string;
  email: string;
}
interface PassData {
  pass: string;
  repass: string;
}

const App: React.FC = () => {
  let navigate: NavigateFunction = useNavigate();
  const handleLogin = (email: string, password: string) => {
    navigate("/form");
  };
  const handleFormSubmit = (formData: ApplicationFormData) => {
    axios({
      url: "http://localhost:3036/submit",
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        formData
      }),
    })
      .then(async (res) => {
        let result = await res.data;
      })
      .catch((err) => console.log(err));
  };

  const handlePassSubmit = (PassData: PassData) => {
    const actcode: string = (window.location.pathname).substring(10)
    axios({
      url: `http://localhost:3036/password/${actcode}`,
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        PassData
      }),
    })
      .then(async (res) => {
        // let result = await res.data;
      })
      .catch((err) => console.log(err));
    navigate("/login");
  }
  const handleRegister = (registerdata: RegisterData) => {
    axios({
      url: "http://localhost:3036/register",
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        registerdata
      }),
    })
      .then(async (res) => {
        let result: { user_id: string; actcode: string; current_time: Date } = await res.data;
        let actcode = result.actcode;
        navigate(`/activate/${actcode}`);
      })
      .catch((err) => console.log(err));
  }

  return (

    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/" element={<Register onRegister={handleRegister} />}></Route>
        <Route path="/form" element={<Form onSubmit={handleFormSubmit} />}></Route>
        <Route path="/activate/:actcode" element={<Activate />}></Route>
        <Route path="/password/:actcode" element={<Password onPasssubmit={handlePassSubmit} />}></Route>
      </Routes>
    </div>

  );
};

export default App;
