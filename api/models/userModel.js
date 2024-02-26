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
    avatar :{
        type:String,
        default:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1150884421.1708961013&semt=sph"   
    },
},{timstamps:true});

//creating a model
const User = mongoose.model('User',userSchema);

export default User;


