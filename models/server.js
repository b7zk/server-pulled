const express = require("express");
const db = require("../db/connection");
const cors = require("cors");
const fileUpload = require("express-fileupload");

class Server {
  constructor() {
    this.app = express(); //express para el server
    this.port = process.env.PORT; //puerto

    //endpoints
    this.paths = {
      productos: "/products",
      categorias: "/categories",
      buscar: "/buscar",
    };
    this.middlewares(); //middlewares
    this.routes(); //rutas
    this.dbConnection(); //conexion a la DB
  }

  async dbConnection() {
    //Conectar DB
    try {
      await db.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.static("public"));

    //carga de archivo
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
      })
    );
  }

  //rutas
  routes() {
    this.app.use(this.paths.productos, require("../routes/products")); //endpoint
    this.app.use(this.paths.categorias, require("../routes/categories")); //endpoint
    this.app.use(this.paths.buscar, require("../routes/buscar")); //endpoint
  }

  listen() {
    //Start Server
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto: ", this.port);
    });
  }
}

module.exports = Server;
