import React, { useEffect, useState } from "react";
import "./Fetchemp.css";
import axios from "axios";
import { User } from "../interfacefile";
import { useNavigate } from "react-router-dom";

const Fetchemp: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const fetchuser = async () => {
        const response = await axios.get(`http://localhost:3036/employees`);
        const alluser = response.data;
        setData(await alluser);
    };
    useEffect(() => {
        fetchuser();
    }, []);

    const updateuser = (id: number) => {
        navigate("/updateform", { state: { id: id } });
    };
    const deleteuser = async (id: number) => {
        const response = await axios.get(`http://localhost:3036/deleteemp/${id}`);
        if (response.data === "Success") {
            navigate("/fetchemp", { state: { id: id } });
        }
    };
    return (
        <div>
            <h2 id="update_form_h2">Update Form</h2>
            <table id="customers">
                <thead>
                    <th>ID</th>
                    <th>firstname</th>
                    <th>lastname</th>
                    <th>update</th>
                    <th>Delete</th>
                </thead>
                <tbody id="tbody">
                    {data.map((data: User) => {
                        return (
                            <tr>
                                <td>{data.emp_id}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>
                                    <p onClick={() => updateuser(data.emp_id)} id="btn-update">
                                        Update
                                    </p>
                                </td>
                                <td>
                                    <p onClick={() => deleteuser(data.emp_id)} id="btn-update">
                                        Delete
                                    </p>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Fetchemp;
