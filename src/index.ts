import "reflect-metadata"
import * as express from 'express';
import loader from './loaders'

function startServer() {
  const app = express();
  
  loader(app);
  
  app.listen(3000, () => {
    console.log('app is listening on port 3000');
  });
}

startServer();