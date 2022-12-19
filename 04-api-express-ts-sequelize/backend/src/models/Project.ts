import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';
import { Todo } from './Todo';

export class Project extends Model<InferCreationAttributes<Project>> {
  declare id: CreationOptional<number>;
  declare title: string;
}

Project.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
}, {
  sequelize
});
