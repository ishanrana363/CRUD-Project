const mongoose = require("mongoose")

const crudSchema = mongoose.Schema({
    email : {
        type : String
    },
    title : {
        type : String
    },
    description : {
        type : String
    },
    status : {
        type : String
    }
},{timestamps:true,versionKey:false})

const crudModel =  mongoose.model("crudModel",crudSchema)


module.exports = crudModel























