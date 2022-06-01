const { Router } = require("express");
const {
  categoriesGet,
  categoriesPost,
  categoriesPut,
  /*   categoriesPatch, */
  categoriesDelete,
  categoryGet,
} = require("../controllers/categoriesControl");

const router = Router();

//endpoints
router.get("/", categoriesGet);
router.get("/:id", categoryGet);

//creacion
router.post("/", categoriesPost);
//actualizacion
router.put("/:id", categoriesPut);
router.delete("/:id", categoriesDelete);
/* router.patch("/", categoriesPatch); */

module.exports = router;
