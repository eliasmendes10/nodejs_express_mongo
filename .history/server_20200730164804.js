const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando o App
const app = express();

//Iniciando o DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

requireDir("./src/models");

//Primeira Rota
app.get("/", (req, res) => {
  res.send("Hello Rocketseat");
});

app.listen(3001);
