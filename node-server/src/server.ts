import App from '@/app';
import IndexRoute from '@/routes/index.route';
import AuthRoute from './routes/auth.route';
import AuthController from './controllers/auth.controller';
import UserRepository from './data/repositories/userRepo';

const server = new App([
  new IndexRoute(),
  new AuthRoute(new AuthController(new UserRepository())),
]);

server.listen();
