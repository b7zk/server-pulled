const { response } = require("express");
const { Categoria, Producto } = require("../models");
//funciones (callbacks) {
const productsGet = async (req, res = response) => {
  //aqui desestructurar lo que necesitemos del url
  /* const { nombre } = req.query; */
  const productos = await Producto.findAll();

  res.json(productos);
};
const productGet = async (req, res = response) => {
  const { id } = req.params;

  const producto = await Producto.findByPk(id);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).json({
      msg: `No existe producto ${id}`,
    });
  }
};

//crear
const productsPost = async (req, res = response) => {
  const body = req.body;
  const categoria = await Categoria.findByPk(body.catgProduct);

  if (!categoria) {
    res.status(404).json({
      msg: `No existe categoria ${body.catgProduct}`,
    });
  }

  body.nameCProduct = categoria.nameCategoria;
  console.log(body);

  try {
    //comprobar si ya existe la categoria
    const existeProducto = await Producto.findOne({
      where: { nameProduct: body.nameProduct },
    });
    //si existe:
    if (existeProducto) {
      return res.status(400).json({
        msg: `Ya existe el producto ${body.nameProduct}`,
      });
    }

    const product = new Producto(body);
    console.log(product);
    await product.save();

    res.json({
      msg: "Get Categories - Controlador",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

//actualizacion
const productsPut = async (req, res = response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    //comprobar si ya existe la categoria
    const producto = await Producto.findByPk(id);

    //si no existe
    if (!producto) {
      return res.status(400).json({
        msg: `No existe categoria con el id ${id}`,
      });
    }

    await producto.update(body);

    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const productsDelete = async (req, res = response) => {
  const { id } = req.params;

  console.log(id);
  const producto = await Producto.findByPk(id);

  //si existe
  if (!producto) {
    return res.status(400).json({
      msg: `No existe categoria con el id ${id}`,
    });
  }

  await producto.update({ statusProduct: false });

  console.log("si");
  res.json(producto);
};
//}

module.exports = {
  productsGet,
  productsPost,
  productsPut,
  productGet,
  productsDelete,
};
