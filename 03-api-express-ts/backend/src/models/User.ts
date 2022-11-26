import { Schema, model } from 'mongoose';
import { IUser } from '../types';

const UserSchema = new Schema<IUser>({
  firstname: { type: String, maxlength: 254, trim: true },
  lastname: { type: String, maxlength: 254, trim: true },
  email: { type: String, trim: true, unique: true, required: true },
  password: { type: String, trim: true, required: true },
  avatar: { type: String, maxlength: 10, required: true },
}, {
  timestamps: true,
  versionKey: false,
});

const User = model('User', UserSchema);

export default User;
