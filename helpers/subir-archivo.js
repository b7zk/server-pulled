const path = require("path"); //crear urls
const { v4: uuidv4 } = require("uuid"); //identificadores unicos

//sube el archivo y el arreglo de extensiones permitidas
const subirArchivo = (
  files,
  extensionesValidas = ["png", "jpg", "jpeg", "gif"]
) => {
  return new Promise((resolve, reject) => {
    const { archivo } = files; //define el archivo de files

    const nombreCortado = archivo.name.split("."); //dividir nombre
    const extension = nombreCortado[nombreCortado.length - 1]; //saber extension

    //validar extension
    if (!extensionesValidas.includes(extension)) {
      return reject(
        `La extension: ${extension} no es permitida | permitidas: ${extensionesValidas}`
      );
    }

    const nombreTemp = uuidv4() + "." + extension; //renombrado unico a archivo

    //path a donde se ubicara el archivo
    //__dirname [donde te encuentras], direccion + nombre de archivo a guardar
    const uploadPath = path.join(__dirname, "../uploads/", nombreTemp);

    //ubica el archivo
    archivo.mv(uploadPath, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(nombreTemp);
    });
  });
};

module.exports = {
  subirArchivo,
};
