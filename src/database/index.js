const Sequelize = require("sequelize");
const configDb = require("../config/sqConfig");

const Peoples = require("../models/people");
const Adresses = require("../models/adress");
const Techs = require("../models/techs");

const models = [Peoples, Adresses, Techs];

class Database {
    constructor() {
        this.connection = new Sequelize(configDb);
        this.init();
        this.associate();
    }

    init() {
        models.forEach(model => model.init(this.connection));
    }

    associate() {
        models.forEach(model => {
            if (model.associate) {
                model.associate(this.connection.models);
            }
        });
    }
}

module.exports = new Database();