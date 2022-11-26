import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import models from '../models';
import { ILogIn, IUser, IUserToken } from "../types"

const User = models.User;

const createToken = (user: IUser, secret: string, expiresIn: string) => {
  const { _id, email } = user;

  return jwt.sign({ _id, email }, secret, { expiresIn });
}

const UserController = {
  logIn: async (req: Request, res: Response) => {
    try {
      const { email, password }: ILogIn = req.body;

      const userExist = await User.findOne<IUser>({ email });
      if (!userExist) return res.status(404).json({
        status: 404,
        message: 'Email not found'
      });

      const correctPass = await bcrypt.compare(password, userExist.password);
      if (!correctPass) return res.status(404).json({
        status: 404,
        message: 'Wrong password'
      });

      const token = createToken(userExist, process.env.SECRET as string, '24h');

      res.status(200).json({
        status: 200,
        token,
      })
    } catch (err) {
      console.error('Error on User > logIn:', err);
      res.status(500).json({
        status: 500,
        message: 'Server error'
      })
    }

  },
  signUp: async (req: Request, res: Response) => {
    try {
      const userData: Omit<IUser, '_id'> = req.body;
      const { email, password } = userData;

      const userExist = await User.findOne<IUser>({ email });
      if (userExist) return res.status(403).json({
        status: 403,
        message: 'Email already exists'
      });


      const salt = await bcrypt.genSalt(10);
      userData.password = await bcrypt.hash(password, salt);
      
      const newUser = new User({ ...userData })
      await newUser.save();
      
      res.status(200).json({
        status: 200,
        message: 'Account created'
      })
    } catch (err) {
      console.error('Error on User > signUp:', err);
      res.status(500).json({
        status: 500,
        message: 'Server error'
      })
    }
  },
  auth: async (req: Request, res: Response) => {
    try {
      const tokenDecoded: IUserToken = req.body.token;

      const user = await User.findById<IUser>(tokenDecoded);
      if (!user) return res.status(403).json({
        status: 404,
        message: 'Wrong token content'
      });

      res.status(200).json({
        status: 200,
      })

    } catch (err) {
      console.error('Error on User > auth:', err);
      res.status(500).json({
        status: 500,
        message: 'Server error'
      })
    }
  },
  getUserData: async (req: Request, res: Response) => {
    try {
      const tokenDecoded: IUserToken = req.body.token;

      const user = await User.findById<IUser>(tokenDecoded._id);
      
      if (!user) return res.status(403).json({
        status: 403,
        message: 'Wrong token content'
      });

      const { firstname, lastname, email, avatar } = user;

      res.status(200).json({
        status: 200,
        user: {
          firstname,
          lastname,
          email,
          avatar,
        }
      })

    } catch (err) {
      console.error('Error on User > getUserData:', err);
      res.status(500).json({
        status: 500,
        message: 'Server error'
      })
    }
  },
  getAllUsers: async (_req: Request, res: Response) => {
    try {
      const users = await User.find<IUser>({});

      const cleanUsers = users.map(user => {
        const {password, ...rest} = user.toObject();
        return rest
      });
      
      if (!users) return res.status(403).json({
        status: 403,
        message: 'Wrong token content'
      });

      res.status(200).json({
        status: 200,
        users: cleanUsers
      })

    } catch (err) {
      console.error('Error on User > getAllUsers:', err);
      res.status(500).json({
        status: 500,
        message: 'Server error'
      })
    }
  },
}

export default UserController;