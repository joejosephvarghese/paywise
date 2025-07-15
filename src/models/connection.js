import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const database = process.env.DATA_BASE_NAME;
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;

console.log(database,username,password,"got env");

const sequelize = new Sequelize(database, username, password, {
  host: "localhost",
  dialect: "postgres"
});

export default sequelize;
