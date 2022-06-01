const { DataTypes } = require("sequelize");
const db = require("../db/connection");

const Producto = db.define(
  "Producto",
  {
    nameProduct: {
      type: DataTypes.STRING,
    },
    descProduct: {
      type: DataTypes.STRING,
    },
    priceProduct: {
      type: DataTypes.FLOAT,
    },
    catgProduct: {
      type: DataTypes.INTEGER,
    },
    imgProduct: {
      type: DataTypes.STRING,
    },
    statusProduct: {
      type: DataTypes.BOOLEAN,
    },
    nameCProduct: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Producto;
