const express = require('express')
const {
    authenticate,
} = require('../middlewares/auth/authenticate')
const {
    authorizeAdmin,
} = require('../middlewares/auth/authorize')
const {
    getAllTables,
    getDetailTable,
    createTable,
    updateTable,
    deleteTable,
} = require('../controllers/table.controller')

const tableRouter = express.Router()

tableRouter.get('/get-all/', getAllTables)
tableRouter.get('/:id/get-detail', getDetailTable)
tableRouter.post('/create', authenticate, authorizeAdmin, createTable)
tableRouter.put('/:id/update', authenticate, authorizeAdmin, updateTable)
tableRouter.delete('/:id/delete', authenticate, authorizeAdmin, deleteTable)

module.exports = {
    tableRouter
}