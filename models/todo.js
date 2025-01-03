import mongoose from "mongoose";
//create schema for mongoDb

const todoSchema = new mongoose.Schema({ //same as object
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   

});

export const Todo = mongoose.model("Todo",todoSchema);