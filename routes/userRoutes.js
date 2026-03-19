import express from 'express';
import userController from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/user', userController.createUser);

export default userRouter;