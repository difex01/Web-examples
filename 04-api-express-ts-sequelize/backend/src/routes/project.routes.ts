import { Router } from 'express';
import controllers from '../controllers/index';

const projectsRoutes = Router();

const { projectsController } = controllers;

projectsRoutes.get('/', projectsController.getProjects);
projectsRoutes.get('/:id', projectsController.getProject);
projectsRoutes.post('/', projectsController.createProject);
projectsRoutes.get('/todos/:id', projectsController.getProjectTodos);

export default projectsRoutes;
