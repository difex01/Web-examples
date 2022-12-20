import { Router } from 'express';
import controllers from '../controllers/index';

const studentRoutes = Router();

const { studentController } = controllers;

studentRoutes.get('/', studentController.getStudents);
export default studentRoutes;
