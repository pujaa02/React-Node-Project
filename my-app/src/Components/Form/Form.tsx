import React, { useState, ChangeEvent, FormEvent } from "react";
import "./form.css"
import axios from "axios";


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

const Form: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fname: "",
    lname: "",
    designation: "",
    email: "",
    phone: "",
    gender: "",
    rel_status: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    bd: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
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

  return (
    <div className="application-form-container">
      <form onSubmit={handleSubmit} className="application-form">
        <fieldset className="fieldset form-control">
          <legend>Job Application</legend>
          <div className="row">
            <div className="form-group">
              <label htmlFor="fname">First Name:</label>
              <input
                type="text"
                id="fname"
                name="fname"
                value={formData.fname}
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
                value={formData.lname}
                onChange={handleChange}

                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="designation">Designation:</label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row">

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="bd">DOB:</label>
              <input
                type="date"
                id="bd"
                name="bd"
                value={formData.bd}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="address1">Address1:</label>
              <input
                type="text"
                id="address1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address2">Address2:</label>
              <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-gender">
              <label >Gender:</label>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="form-control"
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formData.gender === "female"}
                className="form-control"
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={formData.gender === "other"}
                className="form-control"
              />
              <label htmlFor="other">Other</label>
            </div>
            <div className="form-group">
              <label htmlFor="rel_status">Relationship Status:</label>
              <select name="rel_status" id="rel_status" value={formData.rel_status} onChange={handleChange}>
                <option value="married">Married</option>
                <option value="unmarried">Unmarried</option>
                <option value="widow">Widow</option>
                <option value="divorced">Divorced</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code:</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit Application
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
