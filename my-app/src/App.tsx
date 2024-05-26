import React from "react";
import Login from "./Components/Login";
import "./App.css";
import Register from "./Components/Register";
import Form from "./Components/Form";

interface ApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const handleFormSubmit = (formData: ApplicationFormData) => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
    // You can make an API call here to submit the form data
  };
  return (
    <div className="App">
      <Login onLogin={handleLogin} />
      {/* <Register /> */}
      <Form onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
