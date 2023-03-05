const { Model, DataTypes } = require("sequelize");

class People extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
            },
            region: {
                type: DataTypes.STRING,
            }
        }, { sequelize });
    }

    static associate(models) {
        this.hasMany(models.Adress, { foreignKey: "people_id", as: "adresses" });
        this.belongsToMany(models.Techs, { foreignKey: "people_id", as: "techs", through: "people_techs" });
    }
}


module.exports = People;