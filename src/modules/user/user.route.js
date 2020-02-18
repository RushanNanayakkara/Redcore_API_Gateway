import { Router } from 'express';

import * as userController from './user.controller';

const userRouter = new Router();

userRouter.get('/', userController.getUser);
userRouter.get('/verify', userController.verifyUser);
userRouter.patch('/update', userController.updateUser);
userRouter.delete('/delete', userController.deleteUser);
userRouter.post('/signup', userController.signUp);
userRouter.post('/login', userController.login);

export default userRouter;
