import { Router } from 'express';
import users from './user_route';

const router = Router();

router.use('/users', users);

export default router;
