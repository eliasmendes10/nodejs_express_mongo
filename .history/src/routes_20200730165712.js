const express = require("express");
const routes = express.Router();

//Primeira Rota
routes.get("/", (req, res) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native",
  });

  res.send("Hello Rocketseat");
});
