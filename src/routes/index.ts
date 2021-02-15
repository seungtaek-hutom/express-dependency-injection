import { Router } from 'express';
import userRouter from './user.router';

export default () => {
  const appRouter = Router();
  appRouter.use('/users', userRouter());

  return appRouter;
};