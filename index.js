import express from "express" 
import bodyParser from "body-parser"
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";

const app=express()

app.use(bodyParser.json());

const mongoUrl="mongodb+srv://admin:123@cluster0.5ovwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl);

let connection=mongoose.connection
connection.once("open",()=>{
    console.log("MongoDB connection established successfully")
})

app.use("/api/users",userRouter)

app.listen(3000,()=>{
    console.log("server running on port 3000")
})