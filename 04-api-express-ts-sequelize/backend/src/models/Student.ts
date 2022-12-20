import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';

export class Student extends Model<InferCreationAttributes<Student>> {
  declare student_id: CreationOptional<number>;
  declare name: string;
  declare age: string;
}

Student.init({
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize
});
