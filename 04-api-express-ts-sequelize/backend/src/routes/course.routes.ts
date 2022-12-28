import { Router } from 'express';
import controllers from '../controllers/index';

const courseRoutes = Router();

const { courseController } = controllers;

courseRoutes.get('/', courseController.getCourses);
courseRoutes.get('/:id', courseController.getCourseById);
courseRoutes.get('/students/:id', courseController.getCourseStudentsById);
courseRoutes.post('/', courseController.createCourse);
courseRoutes.delete('/:id', courseController.deleteCourse);

export default courseRoutes;
