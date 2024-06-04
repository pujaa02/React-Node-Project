import React, { useEffect, useState } from "react";
import "./Fetchemp.css"
import axios from "axios";
import { User } from "../interfacefile";
import { useNavigate } from "react-router-dom";

const Fetchemp: React.FC = () => {
    const cookie = (document.cookie);
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const fetchuser = async () => {
        const response = await axios.get(`http://localhost:3036/getallemp`);
        const alluser = (response.data.result);
        setData(await alluser);
    }
    useEffect(() => {
        fetchuser()
    }, []);
    if (cookie) {
        const updateuser = (id: number) => {
            console.log(id);
            navigate('/updateform', { state: { id: id } });
        }
        const deleteuser = async (id: number) => {
            await axios.get(`http://localhost:3036/deleteemp/${id}`, { withCredentials: true });
        }
        return (
            <div className="fetch-user">
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
                            return (<tr>
                                <td >{data.emp_id}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td><p onClick={() => updateuser(data.emp_id)} id="btn-update">Update</p></td>
                                <td><p onClick={() => deleteuser(data.emp_id)} id="btn-update">Delete</p></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div >
        );
    } else {
        return (
            <div className="denied">
                <h1 >Access Denied!!</h1>
            </div>
        )
    }
}

export default Fetchemp;