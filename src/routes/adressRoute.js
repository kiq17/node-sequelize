const express = require("express");

const routes = express.Router();

const { adressController } = require("../controllers");

routes.post("/adress/:id", adressController.createAdress);
routes.get("/adresses", adressController.getAllAdress);
routes.get("/adresses/:id", adressController.getByIdAdress);

module.exports = routes;