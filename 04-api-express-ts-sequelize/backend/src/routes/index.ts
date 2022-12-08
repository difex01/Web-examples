import { Router } from 'express';
import projectRoutes from './project.routes';
import todoRoutes from './todo.routes';

const router = Router();

router.use('/projects', projectRoutes);
router.use('/todos', todoRoutes);

export default router;