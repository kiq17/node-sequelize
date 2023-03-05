const { Model, DataTypes } = require("sequelize");

class Techs extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        },
        { sequelize, tableName: "techs" }
        );
    }

    static associate(models) {
        this.belongsToMany(models.People, { foreignKey: "tech_id", as: "peoples", through: "people_techs" });
    }
}
// não rodou as migrations ainda;
module.exports = Techs;