import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Form from "./Components/Form/Form";
import Activate from "./Components/Password/Activate";
import Password from "./Components/Password/Password";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/activate/:actcode" element={<Activate />}></Route>
        <Route path="/password" element={<Password />}></Route>
      </Routes>
    </div>
  );
};

export default App;
