import express from 'express';
import { NODE_ENV, PORT, ORIGIN } from './config';
import cors from 'cors'

class App {

  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 5000;
    this.initializeMiddlewares();
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


}

export default App;
