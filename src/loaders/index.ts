import expressLoader from './express';
import dependencyInjector from './dependency-injector';
import mongooseLoader from './mongoose';
import { Application } from 'express';

export default async (app: Application) => {
  await mongooseLoader();
  dependencyInjector();
  expressLoader(app);
}