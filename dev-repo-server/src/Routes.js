import { Router } from "express";
import HelloController from './controllers/HelloController';
import UsersControllers from "./controllers/UsersControllers";
import RepositoriesController from "./controllers/RepositoriesController";
import auth from "./middlewares/auth";
import SessionsController from "./controllers/SessionsController";

export const Routes = new Router();

Routes.post('/sessions', SessionsController.create);
Routes.get('/hello', HelloController.index);

Routes.use(auth);

//REST 
Routes.get('/users', UsersControllers.index);
Routes.get('/users/:id', UsersControllers.show);
Routes.post('/users', UsersControllers.create);
Routes.put('/users/:id', UsersControllers.update);
Routes.delete('/users/:id', UsersControllers.destroy);
Routes.get('/users/:user_id/repositories', RepositoriesController.index);
Routes.post('/users/:user_id/repositories', RepositoriesController.create);
Routes.delete('/users/:user_id/repositories/:id', RepositoriesController.destroy);