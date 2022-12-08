import { Router } from 'express';
import controllers from '../controllers/index';

const todoRoutes = Router();

const { todoController } = controllers;

todoRoutes.get('/', todoController.getTodos);
todoRoutes.get('/:id', todoController.getTodo);
todoRoutes.post('/', todoController.createTodo);
export default todoRoutes;
