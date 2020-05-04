const { sequelize } = require('./config')
const TiltModel = require('./tilt')
const BeerModel = require('./beer')


const init = async () => {
    TiltModel.init()
    BeerModel.init()

    await sequelize.sync()

}

module.exports = {
    init,
    sequelize,
    Tilt: TiltModel.Tilt,
    Beer: BeerModel.Beer
}