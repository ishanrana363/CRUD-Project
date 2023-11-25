import React, {useEffect, useState} from 'react';
import toast, {Toaster} from "react-hot-toast";
import {createTaskRequest, listTaskByIdRequest, updateTaskRequest} from "../apiRequest/ApiRequest.js";
import {useNavigate} from "react-router-dom";

const SaveFrom = () => {
    const [formValue, setFormValue] = useState({
        "email" : "",
        "title" : "",
        "description" :"",
        "status" : ""
    })
    const [updateID, setUpdateID] = useState(null)
    const {email,title,description,status} = formValue;

    const formValueChange = (key,value) => {
        setFormValue(prevState => ({
            ...prevState,
            [key] : value
        }))
    }
    const navigate = useNavigate()
    const save = async () => {
        if (email.length===0){
            toast.error("Email is Required ")
        }else if (title.length===0){
            toast.error("Title is Required ")
        }else if (description.length===0){
            toast.error("Description is Required ")
        }else if (status.length===0){
            toast.error("Status is Required ")
        }else {
            if (updateID===null){
                let res = await createTaskRequest(formValue);
                if (res){
                    toast.success(" Create Request Complete ")
                    navigate("/");
                }
                else {
                    toast.error("Create Request Fail")
                }
            }else {
                let res = await updateTaskRequest(formValue,updateID)
                if (res){
                    toast.success("Update Request success ")
                    navigate("/")
                }else {
                    toast.error("Update Request Fail ")
                }
            }

        }
    }
    useEffect(() => {
        (async ()=>{
            let params = new URLSearchParams(document.location.search);
            let id = params.get("id");
            setUpdateID(id)
            if (id!==null){
                await formFillData(id)
            }

        })()
    }, []);
    const formFillData = async(id) => {
        let res = await listTaskByIdRequest(id)
        setFormValue({
            email: res["email"],
            title: res["title"],
            description : res["description"],
            status: res["status"]
        })
    }
    return (
        <div className= "container mt-5 " >
            <div className= "row" >
                <div className= "col-md-4 p-2 " >
                    <label className= "form-label" htmlFor= "email" >Your Email Address </label>
                    <input type= "email" required placeholder= "Your Email Address"
                           value={email}
                           onChange={(e)=>{
                               formValueChange("email",e.target.value)
                           }}
                           className="form-control" id="email"
                    />
                </div>
                <div className= "col-md-4 p-2 " >
                    <label className= "form-label" htmlFor= "title" >Title </label>
                    <input type= "text" required placeholder= "Title"
                           value={title}
                           onChange={(e)=>{
                               formValueChange("title",e.target.value)
                           }}
                           className="form-control" id="title"
                    />
                </div>
                <div className= "col-md-4 p-2 " >
                    <label className= "form-label" htmlFor= "description" >Description </label>
                    <input type= "text" required placeholder= "Description"
                           value={description}
                           onChange={(e)=>{
                               formValueChange("description",e.target.value)
                           }}
                           className="form-control" id="description"
                    />
                </div>
                <div className= "col-md-4 p-2" >
                    <label className= "form-label" htmlFor= "status" >Your Status </label>
                    <input type= "text" required placeholder= "Status"
                           value={status}
                           onChange={(e)=>{
                               formValueChange("status",e.target.value)
                           }}
                           className="form-control" id="status"
                    />
                </div>
                <div className= "col-md-4 p-2" >
                    <label className= "form-label"  >Save </label> <br/>
                    <button onClick={save} className= "btn btn-success w-100 " >
                        Submit
                    </button>
                </div>
            </div>
            <Toaster position="bottom-center" />
        </div>
    );
};

export default SaveFrom;