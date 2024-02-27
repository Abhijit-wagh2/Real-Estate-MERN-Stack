import bcrypt from "bcrypt";
import User from "../models/userModel.js"
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const test = (req, res) => {
    res.json({
        message: 'hellocsdssd world!',
    })
}

export const updateUser = async(req, res, next) => {
    // if(req.user.id !== req.params.id) next(errorHandler(401 ,'Not authorized'));

    try{
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{ 
         $set:{
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
            avatar : req.body.avatar,
         }          
        },{new:true});
        
        const {password, ...rest} = updatedUser._doc;

        res.status(200).json(rest);
    }catch(error){

    }
        

}
