const { Sequelize } = require("sequelize");

const db = new Sequelize(
  process.env.DB,
  process.env.DBUSER,
  process.env.DBPASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = db;
