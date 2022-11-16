type Avatar = 'red' | 'blue' | 'green' | 'yellow' | 'pink' | 'purple';

export interface IUser {
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
