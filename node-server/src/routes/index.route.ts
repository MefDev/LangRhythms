import { makeResponseJson } from '@/helpers';
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
    res
      .status(200)
      .send(makeResponseJson('Hello World from LangRythms!'));
  };
}


export default IndexRoute;
