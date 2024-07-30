const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectModule: require("mysql2"),
    logging: false,
    timezone: "+07:00",
  }
);
// const sequelize = new Sequelize(
//   "studiocom_1207",
//   "studiocom_1207",
//   "123123123",
//   {
//     host: "123.31.29.134",
//     dialect: "mysql",
//     dialectModule: require("mysql2"),
//     logging: false,
//   }
// );
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;
