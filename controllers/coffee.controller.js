const { Coffees } = require('../models')

const getAllCoffees = async (req, res) => {
    try {
        const coffees = await Coffees.findAll()
        res.status(200).json(coffees)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getDetailCoffee = async (req, res) => {
    try {
        const coffee = await Coffees.findOne({
            where: {
                id: req.params.id
            }
        })
        if (coffee) {
            res.status(200).json(coffee)
        } else {
            res.status(404).json({
                message: 'Coffee not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const createCoffee = async (req, res) => {
    const { name, price, description } = req.body
    try {
        const newCoffee = await Coffees.create({ name, price, description })
        res.status(201).send(newCoffee)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const updateCoffee = async (req, res) => {
    const { name, price, description } = req.body
    try {
        const coffee = await Coffees.findOne({
            where: {
                id: req.params.id
            }
        })
        if (coffee) {
            await coffee.update({ name, price, description })
            res.status(200).json(coffee)
        } else {
            res.status(404).json({
                message: 'Coffee not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const deleteCoffee = async (req, res) => {
    try {
        const coffee = await Coffees.findOne({
            where: {
                id: req.params.id
            }
        })
        if (coffee) {
            await coffee.destroy()
            res.status(200).json({
                message: 'Coffee deleted'
            })
        } else {
            res.status(404).json({
                message: 'Coffee not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const uploadCoffeeImage = async (req, res) => {
    try {
        const coffee = await Coffees.findOne({
            where: {
                id: req.params.id
            }
        })
        if (coffee) {
            const { file } = req
            const urlImage = `${req.protocol}://${req.get('host')}/images/coffee/${file.filename}`
            await coffee.update({ image: urlImage })
            res.status(200).json({
                message: 'Coffee image updated',
                urlImage
            })
        } else {
            res.status(404).json({
                message: 'Coffee not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

module.exports = {
    getAllCoffees,
    getDetailCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
    uploadCoffeeImage
}