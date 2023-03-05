const { Model, DataTypes } = require("sequelize");

class Adress extends Model {
    static init(sequelize) {
        super.init({
            street: {
                type: DataTypes.STRING,
            },
            zipcode: {
                type: DataTypes.STRING,
            },
            people_id:{
                type: DataTypes.INTEGER
            }
        }, { sequelize });
    }

    static associate(models){
        this.belongsTo(models.People, {foreignKey: "people_id", as: "people"});
    }
}


module.exports = Adress;