import React, { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate, NavigateFunction, useLocation } from "react-router-dom";
import "./activate.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { log } from "console";

interface propState {
    user_id: string;
    actcode: string
}
const Activate: React.FC = () => {
    let navigate: NavigateFunction = useNavigate();
    const location = useLocation();
    const [display, setDisplay] = useState(false);
    const [error, setError] = useState("")
    let { user_id } = location.state as propState;
    let { actcode } = location.state as propState;
    console.log(user_id, "userid", actcode);
    const passpage = () => {
        navigate(`/password`, { state: { user_id: user_id, actcode: actcode } })
    }
    const myfun = async () => {
        setError("")
        const result = await axios.get(`http://localhost:3036/activatecheck/${user_id}`);
        console.log(result.data.message);
        const msg: string = result.data.message
        if (msg == "success") {
            setDisplay(true);
        } else if (msg == "failed") {
            setError("Activation Link is Expired!!");
            const result = await axios.get(`http://localhost:3036/deleteuser/${user_id}`);
        } else {
            setError("User Not Exist, Plz Register Again!!")
        }
    }
    return (
        <div className="container-activate">
            <h1 id="activate-h1">Thank you for registration!!</h1>
            <p id="activate-p">To activate your account click on the below Button</p>
            <button id="btn-act" onClick={myfun}>{actcode}</button>
            {display && <div className="passact">
                <p onClick={passpage}>Activate</p>
            </div>}
            <p id="error">{error}</p>
        </div >
    );
}

export default Activate;
