//importaciones de terceros
require("dotenv").config();

//importaciones propias
const Server = require("./models/server");

const server = new Server();

server.listen();
