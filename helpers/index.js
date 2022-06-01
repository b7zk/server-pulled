const dbValidators = require("./db-validators");
const subirArchivo = require("./subir-archivo");

module.exports = {
  //... exparse todo su contenido (funcion, variables etc)
  ...dbValidators,
  ...subirArchivo,
};
