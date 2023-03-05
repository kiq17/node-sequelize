"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("adresses", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            people_id:{
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {model: "people", key: "id"},
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            },
            street: {
                type: Sequelize.STRING,
                allowNull: false
            },
            zipcode: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("adresses");
    }
};