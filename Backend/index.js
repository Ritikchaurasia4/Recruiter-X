const express=require("express");
const app=express(); 

app.use(express.json());

const mongoose=require("mongoose");

const cors=require("cors");
app.use(cors())

const expressFileupload=require('express-fileupload');

const {recruiterRoute} =require('./routes/recruiterRoute')

const {seekerRoute}=require('./routes/seekerRoute')

const {AdminRoute}=require('./routes/AdminRoute')


app.use("/upload",express.static("./uploads"));
//http://localhost:9000/upload/daya.jpg
app.use(expressFileupload())
const DbConnect=async()=>{ 
        const con=await mongoose.connect("mongodb://127.0.0.1:27017/recruitex");
        if(con){
            console.log("Connected to MongoDB...");
        }
} 
DbConnect();
 app.use("/api",AdminRoute);
 app.use("/api",recruiterRoute);
 app.use("/api",seekerRoute);


app.listen(9000,()=>{
    console.log("Server is Running at 9000 port")
});