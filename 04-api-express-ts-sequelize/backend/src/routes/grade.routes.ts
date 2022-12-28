import { Router } from 'express';
import controllers from '../controllers/index';

const gradeRoutes = Router();

const { gradeController } = controllers;

gradeRoutes.get('/', gradeController.getGrades);
gradeRoutes.get('/:id', gradeController.getGradeById);
gradeRoutes.get('/students/:id', gradeController.getGradeStudentsById);
gradeRoutes.post('/', gradeController.createGrade);
gradeRoutes.delete('/:id', gradeController.deleteGrade);

export default gradeRoutes;
