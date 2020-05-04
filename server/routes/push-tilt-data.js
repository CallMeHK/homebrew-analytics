const BeerModel = require('../models/beer')
const TiltModel = require('../models/tilt')
const abv = require('../abv')

const pushTiltData = async (req, res) => {
    try {
        const activeBeer = await BeerModel.Beer.findOne({
            where: { active: true }
        })

        if (!activeBeer) {
            return res.send({
                success: false,
                error: 'No active beer found'
            })
        }

        const tiltData = req.body[0]

        const requiredFields = ['color', 'timestamp', 'gravity', 'temp']

        const tiltDataHasRequiredFields = !requiredFields.filter(required =>
            !Object.keys(tiltData).includes(required))[0]


        if (!tiltDataHasRequiredFields) {
            return res.send({
                success: false,
                error: 'tilt data is missing fields'
            })
        }

        const { color, timestamp, gravity: gravity1000, temp } = tiltData
        const gravity = gravity1000 / 1000
        const { name, id: beerId, originalGravity } = activeBeer
        const abvSimple = abv.simple(originalGravity, gravity)
        const abvComplex = abv.complex(originalGravity, gravity)

        const insertTiltData = await TiltModel.Tilt.create({
            name, beerId, gravity, temp, color, abvSimple, abvComplex, timestamp
        })

        res.send({
            success: true,
            data: insertTiltData
        })
    } catch (e) {
        res.send({
            success: false,
            error: e.message
        })
    }
}

module.exports = {
    pushTiltData
}