const express = require("express");
const routes = express.Router();

const ProductController = require("./controller/ProductController");

//Primeira Rota
routes.get("/products", ProductController.index);

module.exports = routes;
