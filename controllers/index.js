const Quote = require('../models/plant');

const createPlant = async (req, res) => {
    try {
        const plant = await new Quote(req.body)
        await plant.save()
        return res.status(201).json({
            plant,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createPlant,
}
