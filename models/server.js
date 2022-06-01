const express = require("express");
const db = require("../db/connection");
const cors = require("cors");

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
    /* this.productsPath = "/products"; //direccion del endpoint
    this.categoriesPath = "/categories"; //direccion del endpoint */
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
    this.app.use(cors()); //cors

    this.app.use(express.json()); //read and parse body
    this.app.use(express.static("public")); //directorio publico
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
