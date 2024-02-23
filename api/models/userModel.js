import mongoose  from "mongoose";


//this is a schema which is template for storing the data
const userSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
    },
},{timstamps:true});

//creating a model
const User = mongoose.model('User',userSchema);

export default User;


