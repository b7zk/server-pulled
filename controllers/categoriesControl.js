const { response } = require("express");
const Categoria = require("../models/categoria");
const Producto = require("../models/producto");

//funciones (callbacks) {
const categoriesGet = async (req, res) => {
  const categorias = await Categoria.findAll();
  res.json(categorias);
};

const categoryGet = async (req, res) => {
  const { id } = req.params;

  const productos = await Producto.findAll({
    where: { catgProduct: id },
  });

  if (productos) {
    res.json(productos);
  } else {
    res.status(404).json({
      msg: `No existe categoria ${id}`,
    });
  }
};

//crear
const categoriesPost = async (req, res) => {
  const body = req.body; //destructurar lo que se envia en el body

  try {
    //comprobar si ya existe la categoria
    const existeCategoria = await Categoria.findOne({
      where: { nameCategoria: body.nameCategoria },
    });
    //si existe:
    if (existeCategoria) {
      return res.status(400).json({
        msg: `Ya existe la categoria ${body.nameCategoria}`,
      });
    }

    const cat = new Categoria(body);
    await cat.save();

    res.json({
      msg: "Get Categories - Controlador",
      cat,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

//actualizacion
const categoriesPut = async (req, res) => {
  const { body } = req;
  const { id } = req.params;

  try {
    //comprobar si ya existe la categoria
    const categoria = await Categoria.findByPk(id);

    //si existe
    if (!categoria) {
      return res.status(400).json({
        msg: `No existe categoria con el id ${id}`,
      });
    }

    await categoria.update(body);

    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const categoriesDelete = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  const categoria = await Categoria.findByPk(id);

  //si existe
  if (!categoria) {
    return res.status(400).json({
      msg: `No existe categoria con el id ${id}`,
    });
  }

  await categoria.update({ statusCategoria: false });

  console.log("si");
  res.json(categoria);
};
//}

module.exports = {
  categoriesGet,
  categoriesPost,
  categoriesPut,
  /*   categoriesPatch, */
  categoriesDelete,
  categoryGet,
};
