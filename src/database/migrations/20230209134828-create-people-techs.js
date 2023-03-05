"use strict";
/** @type {import("sequelize-cli").Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("people_techs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            people_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "people", key: "id" },
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            },
            tech_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: { model: "techs", key: "id" },
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("people_techs");
    }
};