const { Tables, Bases } = require('../models')

const getAllTables = async (req, res) => {
    try {
        const tables = await Tables.findAll()
        res.status(200).json(tables)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getDetailTable = async (req, res) => {
    try {
        const table = await Tables.findOne({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Bases,
                    as: 'base',
                }
            ]
        })
        if (table) {
            res.status(200).json(table)
        } else {
            res.status(404).json({
                message: 'Table not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const createTable = async (req, res) => {
    const { name, type, position, status, baseId } = req.body
    try {
        const newTable = await Tables.create({ name, type, position, status, baseId })
        res.status(201).send(newTable)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const updateTable = async (req, res) => {
    const { name, type, position, status, baseId } = req.body
    try {
        const table = await Tables.findOne({
            where: {
                id: req.params.id
            }
        })
        if (table) {
            await table.update({ name, type, position, status, baseId })
            res.status(200).json(table)
        } else {
            res.status(404).json({
                message: 'Table not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const deleteTable = async (req, res) => {
    try {
        const table = await Tables.findOne({
            where: {
                id: req.params.id
            }
        })
        if (table) {
            await table.destroy()
            res.status(200).json({
                message: 'Table deleted'
            })
        } else {
            res.status(404).json({
                message: 'Table not found'
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
    getAllTables,
    getDetailTable,
    createTable,
    updateTable,
    deleteTable,
}