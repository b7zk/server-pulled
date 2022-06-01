const { response } = require("express");
const { Op } = require("sequelize");
const { Categoria, Producto } = require("../models");

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
        {
          nameCProduct: {
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
