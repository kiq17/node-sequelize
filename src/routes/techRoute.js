const express = require("express");
const { techController } = require("../controllers");

const routes = express.Router();

routes.post("/tech/:people_id", techController.createTech);

routes.get("/techs/:people_id", techController.getPeopleTechs);

module.exports = routes;