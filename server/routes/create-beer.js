const BeerModel = require('../models/beer')

const createBeer = async (req, res) => {
    try {
        const beerDataKeys = Object.keys(req.body)
        const beerDataValues = Object.values(req.body)
        const requiredFields = ['name','version', 'type', 'description', 'originalGravity', 'targetGravity', 'active']

        const beerDataHasRequiredFields = !requiredFields.filter(required => !beerDataKeys.includes(required))[0]
        const beerDataHasDefinedValues = !beerDataValues
            .map(value => value !== undefined && value !== '' ? 'defined' : 'undefined')
            .filter(value => value === 'undefined')[0]

        const beerRequestIsValid = beerDataHasRequiredFields && beerDataHasDefinedValues

        console.log(
            {beerDataHasRequiredFields, beerDataHasDefinedValues, body: req.body}
        )

        if (!beerRequestIsValid) {
            return res.send({
                success: false,
                error: 'Malformed request'
            })
        }

        const { name, version, type, description, originalGravity, targetGravity, active } = req.body

        const beer = await BeerModel.Beer.create({
            name,
            type,
            version,
            description,
            originalGravity,
            targetGravity,
            active
        })

        res.send({
            success: true,
            data: beer
        })
    } catch (e) {
        console.error(e)

        res.send({
            success: false,
            error: e.message
        })
    }
}

module.exports = {
    createBeer
}