import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./login.css";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onLogin(email, password);

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Login</h2>
        <div className="form-div">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>

        <div className="flex">
          <p>Don't have an Acoount? <Link to="/register">Register</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
