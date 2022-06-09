const port = process.env.PORT || 2108
const url = `http://localhost:${port}`

const userUrl = `${url}/`
const baseUrl = `${url}/bases`
const tableUrl = `${url}/tables`
const coffeeUrl = `${url}/coffees`

module.exports = {
    userUrl,
    baseUrl,
    tableUrl,
    coffeeUrl,
}