import User from "../models/userModel.js"
import bcrypt from "bcrypt";


export const signup = async(req, res) =>{
    //console.log(req.body);
    const{username, email, password} = req.body;

    //using bcrypt to hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    try{
        const newUser = new User({username, email,password:hashedPassword });
        //saviing to database
        await newUser.save();//this funtion takes to so use await
        res.status(201).json("User created successfully!!!")

    }catch(error){
        res.status(500).json(error.message);
    }
   
}