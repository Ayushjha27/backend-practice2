//server

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js"; //dotjs lgana na bhule
import userRouter from "./routes/user.js";
import bodyParser from "body-parser"
const app = express();
dotenv.config();

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/api/v1/user",userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
        console.log(`Server listen at port ${PORT}`);
})

//ayUsh
//projectas7447