import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';

export class Todo extends Model<InferCreationAttributes<Todo>> {
  declare todo_id: CreationOptional<number>;
  declare title: string;
  declare description: string;
  declare is_completed: CreationOptional<boolean>;
  declare project_id: CreationOptional<number>;
}

Todo.init({
  todo_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  project_id: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize
});
