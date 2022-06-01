const { Router } = require("express");
const { check } = require("express-validator");
const {
  categoriesGet,
  categoriesPost,
  categoriesPut,
  categoriesDelete,
  categoryGet,
} = require("../controllers/categoriesControl");
const { existeCategoria } = require("../helpers/db-validators");

const router = Router();

//endpoints
router.get("/", categoriesGet);
router.get("/:id", categoryGet);

//creacion
router.post("/", categoriesPost);
//actualizacion
router.put("/:id", [check("id").custom(existeCategoria)], categoriesPut);
router.delete("/:id", categoriesDelete);

module.exports = router;
