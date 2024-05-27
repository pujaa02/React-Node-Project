import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Form from "./Components/Form/Form";
import { BrowserRouter as Router, Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";

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
const App: React.FC = () => {
  let navigate: NavigateFunction = useNavigate();
  const handleLogin = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/form");
  };
  const handleFormSubmit = (formData: ApplicationFormData) => {
    console.log("Form Data:", formData);
    fetch('http://localhost:3036/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formData
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
    // .catch(err => console.log(err);
  };
  const handleRegister = (registerdata: RegisterData) => {
    console.log("Register Data : ", registerdata);
    navigate("/login");
  }
  return (

    <div className="App">
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />}></Route>
        <Route path="/register" element={<Register onRegister={handleRegister} />}></Route>
        <Route path="/form" element={<Form onSubmit={handleFormSubmit} />}></Route>
      </Routes>
    </div>

  );
};

export default App;
