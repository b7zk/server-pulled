const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Categoria = db.define(
  "categoria",
  {
    nameCategoria: {
      type: DataTypes.STRING,
    },
    descCategoria: {
      type: DataTypes.STRING,
    },
    statusCategoria: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categoria;
