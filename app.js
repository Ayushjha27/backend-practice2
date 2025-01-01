//server

import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js"; //dotjs lgana na bhule
dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
        console.log(`Server listen at port ${PORT}`);
})

//ayUsh
//projectas7447