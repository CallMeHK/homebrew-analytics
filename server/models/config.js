const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://user:pass@localhost:35432/db');

module.exports = {
    sequelize
}