import express from 'express';
const app = express();
import connectDB from "./config/db.js";
import dotenv from 'dotenv';

//configure env
dotenv.config();

connectDB();

app.listen(3000,()=>{
    console.log('Server is running on port 3000!');
})