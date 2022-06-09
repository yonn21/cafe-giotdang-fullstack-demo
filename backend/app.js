const express = require('express')
const { sequelize } = require('./models')
const path = require('path')
const { rootRouter } = require('./routers')

const app = express()

app.use(express.json())

const publicPathDirectory = path.join(__dirname, './public')
app.use(express.static(publicPathDirectory))

app.use('/', rootRouter)

const port = process.env.PORT || 2108
app.listen(port, async () => {
    console.log(`http://localhost:${port}`)
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})