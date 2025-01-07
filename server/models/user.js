import mongoose from "mongoose";
//create schema for mongoDb

const userSchema = new mongoose.Schema({ //same as object
   fullName:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   }

});

export const User = mongoose.model("User",userSchema);