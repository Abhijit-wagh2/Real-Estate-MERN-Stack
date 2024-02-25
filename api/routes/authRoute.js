import express from 'express';
import { signin, signup } from '../controllers/authController.js';
import { authMiddelwares } from '../middlerwares/authMiddlerware.js';

const authRouter = express.Router();


authRouter.post("/signup",signup,authMiddelwares);

authRouter.post("/signin",signin);


export default authRouter;