require("dotenv").config();
module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    timezone: "+07:00",
  },
  production: {
    username: "studiocom_1207",
    password: "123123123",
    database: "studiocom_1207",
    host: "123.31.29.134",
    dialect: "mysql",
    logging: false,
    timezone: "+07:00",
  },
};
