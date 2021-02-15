import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import { UserService } from '../services/user.service';

export default () => {
  const router = Router();
  const userService = Container.get(UserService);

  router.post(
    '/',
    async (req: Request, res: Response) => {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    }
  );
  
  router.get(
    '/',
    async (req: Request, res: Response) => {      
      const users = await userService.findAll();
      res.status(200).json(users);
    }
  );

  return router;
}
