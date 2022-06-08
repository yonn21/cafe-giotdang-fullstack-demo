const express = require('express')
const {
    authenticate,
} = require('../middlewares/auth/authenticate')
const {
    authorizeAdmin,
} = require('../middlewares/auth/authorize')
const {
    uploadImage,
} = require('../middlewares/upload/uploadImage')
const {
    getAllCoffees,
    getDetailCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
    uploadCoffeeImage,
} = require('../controllers/coffee.controller')

const coffeeRouter = express.Router()

coffeeRouter.get('/get-all/', getAllCoffees)
coffeeRouter.get('/:id/get-detail', getDetailCoffee)
coffeeRouter.post('/create', authenticate, authorizeAdmin, createCoffee)
coffeeRouter.put('/:id/update', authenticate, authorizeAdmin, updateCoffee)
coffeeRouter.delete('/:id/delete', authenticate, authorizeAdmin, deleteCoffee)

coffeeRouter.post('/:id/upload-image', authenticate, authorizeAdmin, uploadImage('coffee', 'image'), uploadCoffeeImage)

module.exports = {
    coffeeRouter
}