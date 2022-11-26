import mongoose from "mongoose";

type Avatar = 'red' | 'blue' | 'green' | 'yellow' | 'pink' | 'purple';

export interface IUser extends mongoose.Document {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  avatar: Avatar;
}

export interface ILogIn {
  email: string;
  password: string;
}

export interface IUserToken {
  _id: string;
  email: string;
}
