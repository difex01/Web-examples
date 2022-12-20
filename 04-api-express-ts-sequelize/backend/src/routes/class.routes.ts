import { Router } from 'express';
import controllers from '../controllers/index';

const classRoutes = Router();

const { classController } = controllers;

classRoutes.get('/', classController.getClasses);
export default classRoutes;
