import express from 'express';
import userController from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.post('/user', userController.createUser);

userRouter.post('/auth', userController.loginUser);

userRouter.get('/user/:email', userController.getOne);

export default userRouter;