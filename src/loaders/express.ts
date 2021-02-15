import { Application, json } from 'express';
import appRouter from '../routes';

export default (app: Application) => {
  app.use(json());
  app.use('/', appRouter());
}