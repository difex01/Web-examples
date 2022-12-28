import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';

export class Grade extends Model<InferCreationAttributes<Grade>> {
  declare grade_id: CreationOptional<number>;
  declare name: string;
}

Grade.init({
  grade_id: {
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
