const express = require('express')
const app = express()
const router = require("./src/routes/api")
// Security Middleware Import

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require('cors');
const morgan = require("morgan")
const path = require("path");
const mongoose = require("mongoose");



// Security Middleware library Implement

app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const limit = {
    windowMs : 15*60*10000,
    max : 3000
}


// Database Connection

app.use("/api/v1",router)


app.use("*",(req,res)=>{
    res.status(404).json({
        data : "Routes not found "
    })
})





module.exports = app