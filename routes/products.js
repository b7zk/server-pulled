const { Router } = require("express");
const {
  productsGet,
  productsPost,
  productsPut,
  productsPatch,
  productsDelete,
} = require("../controllers/productsControl");

const router = Router();

//endpoints
router.get("/", productsGet);

//creacion
router.post("/", productsPost);
//actualizacion
router.put("/:id", productsPut);
router.delete("/:id", productsDelete);
/* router.patch("/", productsPatch); */

module.exports = router;
