import React, { useState, ChangeEvent, FormEvent } from "react";
import "./password.css";
import axios from "axios";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";

interface propState {
    user_id: string;
    actcode: string
}
interface PassData {
    pass: string;
    repass: string;
}

const Password: React.FC = () => {
    const location = useLocation();
    let { user_id } = location.state as propState;
    let { actcode } = location.state as propState;
    let navigate: NavigateFunction = useNavigate();
    const [error, setError] = useState("")
    const [PassData, setPassData] = useState<PassData>({
        pass: "",
        repass: "",
    });
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setPassData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handlePassword = (e: FormEvent) => {
        e.preventDefault();
        setError("");
        if (PassData.pass === PassData.repass) {
            axios({
                url: `http://localhost:3036/password/${user_id}/${actcode}`,
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
                    let result = await res.data.msg;
                    if (result == "Success") {
                        navigate("/login");
                    } else {
                        setError("Something Went Wrong!!")
                    }
                })
                .catch((err) => console.log(err));
        } else {
            setError("Password must be same!!")
        }
    };
    return (
        <div className="container-pass">
            <form onSubmit={handlePassword} className="pass-form">
                <div className="pass-form-div">
                    <label htmlFor="pass">Passowrd:</label>
                    <input
                        type="password"
                        id="pass"
                        name="pass"
                        value={PassData.pass}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="pass-form-div">
                    <label htmlFor="repass">Re-Passowrd:</label>
                    <input
                        type="password"
                        id="repass"
                        name="repass"
                        value={PassData.repass}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="passbtn btn-primary">
                    Set Password
                </button>
            </form>
            <p id="mismatch">{error}</p>
        </div>
    );
}

export default Password;