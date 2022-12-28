import { Router } from 'express';
import projectRoutes from './project.routes';
import todoRoutes from './todo.routes';
import studentRoutes from './student.routes';
import couseRoutes from './course.routes';
import gradeRoutes from './grade.routes';

const router = Router();

router.use('/project', projectRoutes);
router.use('/todo', todoRoutes);
router.use('/student', studentRoutes);
router.use('/course', couseRoutes);
router.use('/grade', gradeRoutes);

export default router;
