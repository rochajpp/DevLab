const Sequelize = require("sequelize");
const dbConfig = require("../config/db_config");

const User = require("../src/models/User");


const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;
