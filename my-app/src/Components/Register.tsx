import React, { useState, ChangeEvent, FormEvent } from "react";
import "./register.css";

interface RegisterFormProps {
  onRegister: (RegisterData: RegisterData) => void;
}
interface RegisterData {
  fname: string;
  lname: string;
  email: string;
}
const Register: React.FC<RegisterFormProps> = ({ onRegister }) => {
  const [RegData, setRegData] = useState<RegisterData>({
    fname: "",
    lname: "",
    email: "",
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
    <div className="container">
      <form onSubmit={handleRegister} className="form">
        <fieldset className="fieldset form-control">
          <legend>Register</legend>
          <div className="form-div">
            <label htmlFor="fname">FirstName :</label>
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
          <div className="form-div">
            <label htmlFor="lname">LastName :</label>
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
          <div className="form-div">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={RegData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </fieldset>
      </form>
    </div>
  );
};
export default Register;
