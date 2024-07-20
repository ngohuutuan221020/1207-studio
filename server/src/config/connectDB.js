const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "studiocom_1207",
  "studiocom_1207",
  "123123123",
  {
    host: "123.31.29.134",
    dialect: "mysql",
    dialectModule: require("mysql2"),
    logging: false,
  }
);
let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
module.exports = connectDB;
