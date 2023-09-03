import { Router, Request, Response } from 'express';

class IndexRoute {
  public path = '/';
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.index);
  }

  private index = (req: Request, res: Response) => {
    res.send('Hello, World! This is LangRythms');
  };
}

export default IndexRoute;
