import axios from "axios";

export const listTaskRequest = async () => {
    try {
        let res = await fetch(" http://localhost:5052/api/v1/list-task")
        let JSONData = await res.json()
        return JSONData["data"]
    }catch (e){
        return []
    }
}

export const createTaskRequest = async (postBody) => {
    try {
        let res = await axios.post(" http://localhost:5052/api/v1/create-task",postBody)
        if (res.status===201){
            return true
        }else {
            return false
        }
    }catch (e){
        return false
    }
}

export const updateTaskRequest = async (postBody,id) => {
    try {
        let res = await axios.post(" http://localhost:5052/api/v1/update-task/"+id,postBody);
        if (res.status===200){
            return true
        }else {
            return false
        }
    }catch (e){
        return false
    }
}
export const deleteTask = async (id) => {
    try {
        let res = await fetch("  http://localhost:5052/api/v1/delete-task/"+id)
        let JSONData = await res.json()
        if (JSONData["status"]==="success"){
            return true
        }else {
            return false
        }
    }catch (e){
        return false
    }
}


export const listTaskByIdRequest = async(id)=>{
    try {
        let res = await fetch(" http://localhost:5052/api/v1/task-by-id/"+id)
        let jsonData = await res.json()
        return jsonData["data"]
    }catch (e){
        return []
    }
}



















