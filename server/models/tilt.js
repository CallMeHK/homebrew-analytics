const Sequelize = require('sequelize');
const { sequelize } = require('./config')


const Tilt = sequelize.define('tilt', {
    // attributes
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    beerId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    gravity: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    temp: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING
    },
    abvSimple: {
        type: Sequelize.FLOAT
    },
    abvComplex: {
        type: Sequelize.FLOAT
    },
    timestamp: {
        type: Sequelize.DATE
    }
}, {
    // options
});

const init = () => {
}

module.exports = {
    init, Tilt
}