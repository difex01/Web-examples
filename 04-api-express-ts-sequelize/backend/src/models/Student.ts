import { DataTypes, Model, CreationOptional, InferCreationAttributes, BelongsToManyGetAssociationsMixin, BelongsToManyAddAssociationMixin, BelongsToManyCreateAssociationMixin } from "sequelize";
import { sequelize } from '../database/connection';
import { Course } from "./Course";

export class Student extends Model<InferCreationAttributes<Student>> {
  declare student_id: CreationOptional<number>;
  declare name: string;
  declare age: number;
  declare grade_id: CreationOptional<number>;

  declare getCourses: BelongsToManyGetAssociationsMixin<Course>;
  declare addCourse: BelongsToManyAddAssociationMixin<Course, number>;
  declare createCourse: BelongsToManyCreateAssociationMixin<Course>;
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
  },
  grade_id: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize
});
