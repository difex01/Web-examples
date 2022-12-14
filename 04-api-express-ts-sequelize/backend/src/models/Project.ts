import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';

export class Project extends Model<InferCreationAttributes<Project>> {
  declare project_id: CreationOptional<number>;
  declare title: string;
}

Project.init({
  project_id: {
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
