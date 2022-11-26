import { Router } from 'express';
import controllers from '../controllers';
import auth from '../middlewares/auth';

const UserController = controllers.UserController;

const router = Router();

router.get('/', auth, UserController.getAllUsers)

router.get('/current', auth, UserController.getUserData);

router.post('/login', UserController.logIn);

router.post('/signup', UserController.signUp);

router.post('/auth', auth, UserController.auth);

export default router;
