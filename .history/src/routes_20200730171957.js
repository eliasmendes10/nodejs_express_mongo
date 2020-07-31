const express = require("express");
const routes = express.Router();

const ProductController = require("./controller/ProductController");

//Primeira Rota
routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);

module.exports = routes;
