//server

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js"; //dotjs lgana na bhule
import userRouter from "./routes/user.js";
import bodyParser from "body-parser";
import todoRouter from "./routes/todo.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//middleware
app.use("/api/v1/user",userRouter);
app.use("/api/v1/todo",todoRouter);

//http://localhost:8000/api/v1/user/
//http://localhost:8000/api/v1/todo/
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
        console.log(`Server listen at port ${PORT}`);
})

//ayUsh
//projectas7447