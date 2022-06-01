//ROLES
const { Categoria, Producto } = require("../models");

//validar si existe una categoria en la db
const existeCategoria = async (id) => {
  //verificar si el Id existe
  const existeCat = await Categoria.findByPk(id);
  if (!existeCat) {
    throw new Error(`El id: ${id} no existe en la DB`);
  }
};
//validar si existe un producto en la db
const existeProducto = async (id) => {
  //verificar si el Id existe
  const existeProducto = await Producto.findByPk(id);
  if (!existeProducto) {
    throw new Error(`El id: ${id} del producto no existe en la DB`);
  }
};

module.exports = {
  existeCategoria,
  existeProducto,
};
