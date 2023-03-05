require("dotenv/config");


module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB_NAME,
    define: {
        timestamp: true,
        underscored: true,
    }
};

