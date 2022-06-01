const { response } = require("express");
const { Op } = require("sequelize");
const Producto = require("../models/producto");

const buscar = async (req, res = response) => {
  const { termino } = req.params;

  const productos = await Producto.findAll({
    where: {
      [Op.or]: [
        {
          nameProduct: {
            [Op.like]: `%${termino}%`,
          },
        },
        {
          descProduct: {
            [Op.like]: `%${termino}%`,
          },
        },
      ],
    },
  });

  res.json({
    productos,
  });
};

module.exports = {
  buscar,
};
