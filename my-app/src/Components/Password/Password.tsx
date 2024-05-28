import React, { useState, ChangeEvent, FormEvent } from "react";
import "./password.css";

interface PasswordProps {
    onPasssubmit: (PassData: PassData) => void;
}
interface PassData {
    pass: string;
    repass: string;
}

const Password: React.FC<PasswordProps> = ({ onPasssubmit }) => {
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
        onPasssubmit(PassData);
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
        </div>
    );
}

export default Password;