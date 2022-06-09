const express = require('express')

const { baseRouter } = require('./base.router')
const { tableRouter } = require('./table.router')
const { userRouter } = require('./user.router')
const { coffeeRouter } = require('./coffee.router')

const rootRouter = express.Router()

rootRouter.use('/', userRouter)
rootRouter.use('/bases', baseRouter)
rootRouter.use('/tables', tableRouter)
rootRouter.use('/coffees', coffeeRouter)

module.exports = {
    rootRouter
}