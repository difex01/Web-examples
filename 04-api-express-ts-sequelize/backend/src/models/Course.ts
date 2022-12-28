import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';

export class Course extends Model<InferCreationAttributes<Course>> {
  public course_id!: CreationOptional<number>;
  public name!: string;
}

Course.init({
  course_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}, {
  sequelize
});
