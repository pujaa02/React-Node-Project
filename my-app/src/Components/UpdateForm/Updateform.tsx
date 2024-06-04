import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ApplicationFormData, validateformdata } from "../interfacefile";
import { propState } from "../interfacefile";

const Updateform: React.FC = () => {
    const token = (document.cookie);
    const navigate = useNavigate();
    const location = useLocation();
    const [id, setid] = useState<string>("")
    const [formData, setFormData] = useState<ApplicationFormData | undefined>(undefined);
    const [validaterr, setValidateerr] = useState<validateformdata>({
        fn: "",
        ln: "",
        desig: "",
        mail: "",
        mobile: "",
        gen: "",
        rel: "",
        add1: "",
        add2: "",
        city: "",
        state: "",
        zip: "",
        dob: "",
    })
    useEffect(() => {
        if (location.state) {
            const { id } = location.state as propState;
            setid(id);
        }
    }, [location.state])
    useEffect(() => {
        if (id) {
            const getempdata = async () => {
                try {
                    const response = await axios.get(`http://localhost:3036/findemp/${id}`);
                    const emp = (response.data.result);
                    setFormData(emp);
                } catch (error) {
                    console.log(error);
                }
            }
            getempdata();
        }
    }, [id])
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        if (formData) {
            const { name, value } = e.target;
            setFormData((prevState) => ({
                ...prevState!,
                [name]: value,
            }));
        }
    };
    const validateform = (data: ApplicationFormData) => {
        const validaterr: validateformdata = {} as validateformdata;
        if (!data.fname.trim()) {
            validaterr.fn = "FirstName is Required!!"
        }
        if (!data.lname.trim()) {
            validaterr.ln = "LastName is Required!!"
        }
        if (!data.designation.trim()) {
            validaterr.desig = "Designation is required!"
        }
        if (!data.email.trim()) {
            validaterr.mail = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            validaterr.mail = 'Email is invalid';
        }
        if (!data.phone.trim()) {
            validaterr.mobile = "Number is Required!!"
        } else if (!/^\d{10}$/.test(data.phone)) {
            validaterr.mobile = "Please enter valid number!!"
        }
        if (!data.rel_status.trim()) {
            validaterr.rel = "Relation is required!"
        }
        if (!data.address1.trim()) {
            validaterr.add1 = "Address1 is required!"
        }
        if (!data.city.trim()) {
            validaterr.city = "City is required!"
        }
        if (!data.state.trim()) {
            validaterr.state = "state is required!"
        }
        if (!data.zipcode.trim()) {
            validaterr.zip = "Zipcode is required!"
        }
        if (!data.gender.trim()) {
            validaterr.gen = "Gender is Required!!"
        }
        if (!data.bd.trim()) {
            validaterr.dob = 'Birthday Date is Required!!'
        }
        return validaterr;
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (formData) {
            const newerrors = validateform(formData);
            setValidateerr(newerrors);
            if ((Object.values(newerrors)).length === 0) {
                axios({
                    url: `http://localhost:3036/updateemp/${id}`,
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
                        const result = await res.data;
                        if (result.msg === "success") {
                            navigate('/fetchemp');
                        }
                    })
                    .catch((err) => console.log(err));
            }
        }
    };
    if (!token) {
        return (
            <div className="denied">
                <h1 >Can't Access!!</h1>
            </div>
        )
    }
    if (!formData) {
        return (
            <div className="application-form-container">
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div className="application-form-container">
            <form onSubmit={handleSubmit} className="application-form">
                <fieldset className="fieldset form-control">
                    <legend>Job Application</legend>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="fname">First Name:</label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.fn && <span className="error-message">{validaterr.fn}</span>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="lname">Last Name:</label>
                            <input
                                type="text"
                                id="lname"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.ln && <span className="error-message">{validaterr.ln}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="designation">Designation:</label>
                            <input
                                type="text"
                                id="designation"
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.desig && <span className="error-message">{validaterr.desig}</span>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.mail && <span className="error-message">{validaterr.mail}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="phone">Phone:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.mobile && <span className="error-message">{validaterr.mobile}</span>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="bd">DOB:</label>
                            <input
                                type="date"
                                id="bd"
                                name="bd"
                                value={formData.bd}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.dob && <span className="error-message">{validaterr.dob}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="address1">Address1:</label>
                            <input
                                type="text"
                                id="address1"
                                name="address1"
                                value={formData.address1}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.add1 && <span className="error-message">{validaterr.add1}</span>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="address2">Address2:</label>
                            <input
                                type="text"
                                id="address2"
                                name="address2"
                                value={formData.address2}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col form-group">
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.city && <span className="error-message">{validaterr.city}</span>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="state">State:</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.state && <span className="error-message">{validaterr.state}</span>}
                        </div>
                        <div className="col form-group">
                            <label htmlFor="zipcode">zipcode : </label>
                            <input
                                type="text"
                                id="zipcode"
                                name="zipcode"
                                value={formData.zipcode}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {validaterr.zip && <span className="error-message">{validaterr.zip}</span>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-gender">
                                <label >Gender:</label>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === "male"}
                                    onChange={handleChange}
                                    className="form-check-input"
                                />
                                <label htmlFor="male">Male</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="female"
                                    onChange={handleChange}
                                    checked={formData.gender === "female"}
                                    className="form-check-input"
                                />
                                <label htmlFor="female">Female</label>
                                <input
                                    type="radio"
                                    id="other"
                                    name="gender"
                                    value="other"
                                    onChange={handleChange}
                                    checked={formData.gender === "other"}
                                    className="form-check-input"
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                            {validaterr.gen && <span className="error-message">{validaterr.gen}</span>}
                        </div>
                        <div className="col">
                            <div className=" form-group">
                                <label htmlFor="rel_status">Relationship Status:</label>
                                <select name="rel_status" id="rel_status" value={formData.rel_status} onChange={handleChange}>
                                    <option value="married">Married</option>
                                    <option value="unmarried">Unmarried</option>
                                    <option value="widow">Widow</option>
                                    <option value="divorced">Divorced</option>
                                </select>
                            </div>
                            {validaterr.rel && <span className="error-message">{validaterr.rel}</span>}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit Application
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default Updateform;
