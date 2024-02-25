import User from "../models/userModel.js"
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import { authMiddelwares } from "../middlerwares/authMiddlerware.js";
import jwt from "jsonwebtoken";


export const signup = async(req, res,next) =>{
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
        // res.status(500).send({
        //     success : false,
        //     message : "Error in Registration",
        //     error,
        // })
        next(error);
    }
}


export const signin = async(req,res,next) =>{
    const {email,password} = req.body;
    
    try{
        const validUser = await User.findOne({email});

        if(!validUser){
            return next(errorHandler(404,'User not found!'));
        }
        const validPassword = await bcrypt.compare(password, validUser.password);

        if(!validPassword){
            return next(errorHandler(401,'Wrong credentials!'));
        }

        const token = jwt.sign({_id:validUser._id},process.env.JWT_SECRET, {
            expiresIn: 3600
        });

        //destructure the password
        const {password:pass,...rest} = validUser._doc;


        res.cookie('access_token', token, {
            httpOnly: true}).status(200).json(rest);

    }catch(error){
        next(error);
    }

}
