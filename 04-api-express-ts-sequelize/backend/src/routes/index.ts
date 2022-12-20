import { Router } from 'express';
import projectRoutes from './project.routes';
import todoRoutes from './todo.routes';
import studentRoutes from './student.routes';
import classRoutes from './class.routes';

const router = Router();

router.use('/projects', projectRoutes);
router.use('/todos', todoRoutes);
router.use('/student', studentRoutes);
router.use('/class', classRoutes);

export default router;
