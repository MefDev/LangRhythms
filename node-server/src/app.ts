import express from 'express';
import { NODE_ENV, PORT, ORIGIN } from './config';
import cors from 'cors'
import { Routes } from '@/interfaces/routes.interface';
import errorMiddleware from '@/middlewares/error.middleware';
import { API_ROUTES } from './utils/contants';

class App {

  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 5000;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling();
  }

   public listen() {
    this.app.listen(this.port, () =>
      console.log(`🚀 App listening on the port ${this.port}`),
    );
  }

  private initializeMiddlewares() {
    this.app.use(cors({ origin: ORIGIN }));
    this.app.use(express.json());
  }

  private initializeRoutes(routes: Routes[]){
    routes.forEach((route) => {
      this.app.use(API_ROUTES.API_PREFIX, route.router)
    })
  }

  private initializeErrorHandling(){
    this.app.use(errorMiddleware)
  }

}

export default App;
