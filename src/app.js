const express = require("express");
const peopleRoute = require("./routes/peopleRoute");
const adressRoute = require("./routes/adressRoute");
const techRoute = require("./routes/techRoute");
require("./database");

class App {
    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(peopleRoute);
        this.server.use(adressRoute);
        this.server.use(techRoute);
    }
}

module.exports = new App().server;