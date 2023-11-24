const crudModel = require("../models/crudModel")

// C = Create

exports.createTask = async (req,res) =>{
    try {
        let reqBody = req.body
        let result = await crudModel.create(reqBody)
        res.status(201).json({
            status : "success",
            data : result
        })
    }catch (e){
        res.status(500).json({
            status : "fail",
            error : e.toString()
        })
    }
}

// D = Delete

exports.deleteTask = async (req,res)=>{
    try {
        let id = req.params.id
        let query = {
            _id : id
        }
        let result = await crudModel.deleteOne(query)
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch (e){
        res.status(500).json({
            status : "fail",
            data : e.toString()
        })
    }
}

// U = Update

exports.updateTask = async (req,res)=>{
    try {
        let id = req.params.id;
        let reqBody = req.body;
        let query = {
            _id: id
        }
        let result = await crudModel.updateOne(query,reqBody)
        res.status(200).json({
            status : 'success',
            data : result
        })
    }catch (e){
        res.status(500).json({
            status : "fail",
            data : e.toString()
        })
    }
}

// R = read

exports.listTask = async (req,res)=>{
    try {
        let result = await crudModel.find();
        res.status(200).json({
            status : "success",
            data : result
        })
    }catch (e){
        res.status(500).json({
            status : "fail",
            data : e.toString()
        })
    }
}
























