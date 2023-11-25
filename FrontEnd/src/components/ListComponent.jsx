import React, {useEffect, useState} from 'react';
import {deleteTask, listTaskRequest} from "../apiRequest/ApiRequest.js";
import toast, {Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
const ListComponent = () => {
    const [data, setData] = useState([]);
    const [dataDelete, setDataDelete] = useState(0);
    useEffect(() => {
        (async ()=>{
            let res = await listTaskRequest();
            setData(res);
        })()
    }, [dataDelete]);
    const onDelete = async (id) => {
        let res = await deleteTask(id);
        if (res){
            toast.success("Data delete successful");
            setDataDelete(new Date().getTime());
        }else {
            toast.error("Data delete fail");
        }
    }
    if (data.length===0){
        return <h1>Data lodding .... </h1>
    }else {
        return(
            <div className="container" >
                <div className= "row" >
                    <div className= "col-md-12 " >
                        <div className= "table-responsive" >
                                <table className= "table" >
                                    <thead>
                                    <tr>
                                        <th>email</th>
                                        <th>title</th>
                                        <th>description</th>
                                        <th>status</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.map((item,i)=>{
                                            return(
                                                <tr key={i} >
                                                    <td> { item["email"] } </td>
                                                    <td> { item["title"] } </td>
                                                    <td> { item["description"] } </td>
                                                    <td> { item["status"] } </td>
                                                    <td>
                                                        <button onClick={()=>{
                                                            onDelete(item["_id"] )
                                                        }}
                                                                className="btn btn-outline-success">
                                                            Delete
                                                        </button>
                                                        <Link className= "btn btn-info mx-3 "
                                                            to={"/save?id="+item["_id"]}>
                                                            Edit
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-center" />
            </div>
        )
    }
};

export default ListComponent;