import express from 'express';
import { signup } from '../controllers/authController.js';
import { authMiddelwares } from '../middlerwares/authMiddlerware.js';

const authRouter = express.Router();


authRouter.post("/signup",signup,authMiddelwares);


export default authRouter;