const express = require("express");

const routes = express.Router();

const { peopleController } = require("../controllers");

routes.post("/people", peopleController.createPeople);
routes.get("/peoples", peopleController.getAllPeople);

module.exports = routes;