const Sequelize = require('sequelize');
const { sequelize } = require('./config')

const Beer = sequelize.define('beer', {
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    version: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    originalGravity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    targetGravity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    },
}, {
    // options
});

const init = () => {
}

module.exports = {
    init, Beer
}