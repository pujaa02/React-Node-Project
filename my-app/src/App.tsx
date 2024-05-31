import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Form from "./Components/Form/Form";
import Activate from "./Components/Password/Activate";
import Password from "./Components/Password/Password";
import Fetchemp from "./Components/EmployessShow/Fetchemp";
import Updateform from "./Components/UpdateForm/Updateform";
import Wrong from "./Components/wrongurl/Wrong";

const App: React.FC = () => {
  const cookie = (document.cookie);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        {cookie ? <Route path="/form" element={<Form />}></Route> : <Route path="/login" element={<Login />}></Route>}
        {/* {cookie ? <Route path="/fetchemp" element={<Fetchemp />}></Route> : <Route path="/login" element={<Login />}></Route>} */}
        <Route path="/fetchemp" element={<Fetchemp />}></Route>
        <Route path="/updateform" element={<Updateform />}></Route>
        {/* <Route path="/form" element={<Form />}></Route> */}
        <Route path="/activate/:actcode" element={<Activate />}></Route>
        <Route path="/password" element={<Password />}></Route>
        <Route path="*" element={<Wrong />}></Route>
      </Routes>
    </div>
  );
};

export default App;
