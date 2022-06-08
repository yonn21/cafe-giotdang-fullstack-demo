const express = require('express')
const { sequelize } = require('./models')
const path = require('path')
const { rootRouter } = require('./routers')

const app = express()

app.use(express.json())

const publicPathDirectory = path.join(__dirname, './public')
app.use(express.static(publicPathDirectory))

app.use('/', rootRouter)

app.listen(6969, async () => {
    console.log('http://localhost:6969')
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})