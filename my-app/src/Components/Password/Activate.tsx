import React, { FC, FormEvent } from "react";
import "./activate.css"
import { Link } from "react-router-dom";
import axios from "axios";
const Activate: React.FC = () => {
    let d1: Date = new Date();
    const url: string = window.location.pathname;
    const actcode: string = url.substring(10);
    const myfun = async () => {
        return await axios.get(`http://localhost:3036/checktime/${actcode}`)
    }
    // const myval = async () => {
    //     let abc = await myfun();
    //     console.log(abc);
    //     return abc.data
    // }
    // const myfun = async () => {
    //     axios.get(`http://localhost:3036/checktime/${actcode}`)
    //         .then((Response) => { return Response.data })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    // console.log(myfun());


    console.log(myfun());

    let path: string = ''

    return (
        <div className="container-activate">
            <h1 id="activate-h1">Thank you for registration!!</h1>
            <p id="activate-p">To activate your account click on the below Button</p>
            <Link to={path} id="btn-act" >Click Here</Link>
        </div >
    );
}

export default Activate;
// onActivate