import { Sequelize } from "sequelize";

const DB_NAME = process.env.DB_NAME as string;
const DB_USER = process.env.DB_USER as string;
const DB_PASS = process.env.DB_PASS as string;
const DB_HOST = process.env.DB_HOST as string;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'postgres',
});

export const init = async () => {
  try {
    await sequelize.sync();
    console.log('DB Connection success');
  } catch (error) {
    console.error('Connection to the DB failed:', error);
  }
}
