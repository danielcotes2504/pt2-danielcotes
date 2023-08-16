import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();

// postgres connection
export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  dialect: "postgres",
});


