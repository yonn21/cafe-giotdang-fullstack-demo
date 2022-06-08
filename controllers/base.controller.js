const { Bases, Tables } = require('../models')

const getAllBases = async (req, res) => {
    try {
        const bases = await Bases.findAll()
        res.status(200).json(bases)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getDetailBase = async (req, res) => {
    try {
        const base = await Bases.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Tables,
                    as: 'tables',
                }
            ]
        })
        if (base) {
            res.status(200).json(base)
        } else {
            res.status(404).json({
                message: 'Base not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const createBase = async (req, res) => {
    const { name, address } = req.body
    try {
        const newBase = await Bases.create({ name, address })
        res.status(201).send(newBase)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const updateBase = async (req, res) => {
    const { name, address } = req.body
    try {
        const base = await Bases.findOne({
            where: {
                id: req.params.id
            }
        })
        if (base) {
            await base.update({ name, address })
            res.status(200).json(base)
        } else {
            res.status(404).json({
                message: 'Base not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const deleteBase = async (req, res) => {
    try {
        const base = await Bases.findOne({
            where: {
                id: req.params.id
            }
        })
        if (base) {
            await base.destroy()
            res.status(200).json({
                message: 'Base deleted'
            })
        } else {
            res.status(404).json({
                message: 'Base not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const uploadBaseThumbnail = async (req, res) => {
    try {
        const base = await Bases.findOne({
            where: {
                id: req.params.id
            }
        })
        if (base) {
            const { file } = req
            const urlThumbnail = `${req.protocol}://${req.get('host')}/images/base/${file.filename}`
            await base.update({ thumbnail: urlThumbnail })
            res.status(200).json({
                message: 'Base thumbnail updated',
                urlThumbnail
            })
        } else {
            res.status(404).json({
                message: 'Base not found'
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
    getAllBases,
    getDetailBase,
    createBase,
    updateBase,
    deleteBase,
    uploadBaseThumbnail,
}