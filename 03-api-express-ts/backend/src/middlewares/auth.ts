import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUserToken } from '../types';

const { SECRET } = process.env;

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization as string;
  if (!token) return res.status(403).json({
    message: 'A token is required',
  })

  try {
    const decoded: IUserToken = jwt.verify(token, SECRET as string) as IUserToken;
    req.body.token = decoded;
  } catch (err) {
    console.error('error decoding token:', err)
    return res.status(401).json({
      message: 'Invalid token',
    });
  }

  return next();
}

export default verifyToken;
