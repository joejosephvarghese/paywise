import dotenv from "dotenv";

dotenv.config();
import { Sequelize } from "sequelize";

const database = process.env.DATA_BASE_NAME;
const username = process.env.USER_NAME;
const password = process.env.DB_PASSWORD;

console.log(database, username, password, "got env");

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

export default sequelize;
