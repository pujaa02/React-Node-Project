import React, { FC, FormEvent, useEffect, useState } from "react";
import "./activate.css"
import { Link } from "react-router-dom";
import axios from "axios";
import { log } from "console";
const Activate: React.FC = () => {
    const [path, setPath] = useState('');
    const [error, setError] = useState('');
    let d1: Date = new Date();
    const url: string = window.location.pathname;
    const actcode: string = url.substring(10);
    const myfun = async () => {
        const result = await axios.get(`http://localhost:3036/checktime/${actcode}`);
        let d2 = new Date(result.data.result.createdAt);
        var diff = (d1.getTime() - d2.getTime()) / 1000;
        var diffsec = d1.getSeconds() - d2.getSeconds();
        diff /= 60 * 60;
        let final2 = Math.round(diffsec);
        console.log(d1, d2);
        console.log(final2, "diff");
        if (final2 <= 60 && final2 >= 0) {
            console.log("ifffffffff");
            setPath(`/password/${actcode}`);
        } else {
            console.log("else");
            let id = result.data.result.user_id;
            const result2 = await axios.get(`http://localhost:3036/deleteuser/${id}`);
            const msg: string = (result2.data.msg);
            if (msg == "User Deleted !!") {
                setPath(`/activate/${actcode}`);
                setError("User Deleted !!")
            } else if (msg == "User not Exist !!") {
                setPath(`/activate/${actcode}`);
                setError("User not Exist !!")
            }
        }
        return diff;
    }
    // useEffect(() => {
    //     console.log(myfun());
    // })

    return (
        <div className="container-activate">
            <h1 id="activate-h1">Thank you for registration!!</h1>
            <p id="activate-p">To activate your account click on the below Button</p>
            <button onClick={() => myfun()} id="btn-act" >Click Here</button>

            <p id="error">{error}</p>
        </div >
    );
}

export default Activate;
// onActivate