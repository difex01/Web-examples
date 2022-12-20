import { DataTypes, Model, CreationOptional, InferCreationAttributes } from "sequelize";
import { sequelize } from '../database/connection';

export class Class extends Model<InferCreationAttributes<Class>> {
  declare class_id: CreationOptional<number>;
  declare name: string;
}

Class.init({
  class_id: {
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
