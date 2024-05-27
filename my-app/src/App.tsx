import React from "react";
import Login from "./Components/Login";
import "./App.css";
import Register from "./Components/Register";
import Form from "./Components/Form";

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
  const handleLogin = (email: string, password: string) => {
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const handleFormSubmit = (formData: ApplicationFormData) => {
    console.log("Form Data:", formData);
    // fetch("http://localhost:3036/submit")
    //   .then(res => res.json());
    // .then(res=>)
    // fetch('http://localhost:3036/submit', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ formData })
    // });
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

  }
  return (
    <div className="App">
      {/* <Login onLogin={handleLogin} /> */}
      {/* <Register onRegister={handleRegister} /> */}
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
