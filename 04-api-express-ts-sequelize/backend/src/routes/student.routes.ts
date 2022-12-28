import { Router } from 'express';
import controllers from '../controllers/index';

const studentRoutes = Router();

const { studentController } = controllers;

studentRoutes.get('/', studentController.getStudents);
studentRoutes.get('/:id', studentController.getStudentById);
studentRoutes.post('/', studentController.createStudent);
studentRoutes.post('/coursesids', studentController.createStudentWithCoursesIds);
studentRoutes.post('/coursesnames', studentController.createStudentWithCoursesNames);
studentRoutes.put('/:id', studentController.updateStudentById);
studentRoutes.delete('/:id', studentController.deleteStudentById);

export default studentRoutes;
