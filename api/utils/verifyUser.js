import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';


export const verifyToken= (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (!token) return next(errorHandler(401, 'Unauthorized'));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
   
    if (err) {
        console.log(err)
        return next(errorHandler(403, err.message));
    }

    req.user = user;
    next();
    });

};