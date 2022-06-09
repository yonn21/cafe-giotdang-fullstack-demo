const { coffeeUrl } = require('./index.js')

const getAllCoffees = async () => {
    const res = await axios.get(`${coffeeUrl}/get-all/`)
    return res.data
}

const getDetailCoffee = async (id) => {
    const res = await axios.get(`${coffeeUrl}/${id}/get-detail`)
    return res.data
}

const createCoffee = async (coffee) => {
    const res = await axios.post(`${coffeeUrl}/create`, coffee)
    return res.data
}

const updateCoffee = async (id, coffee) => {
    const res = await axios.put(`${coffeeUrl}/${id}/update`, coffee)
    return res.data
}

const deleteCoffee = async (id) => {
    const res = await axios.delete(`${coffeeUrl}/${id}/delete`)
    return res.data
}

const uploadCoffeeImage = async (id, image) => {
    const res = await axios.post(`${coffeeUrl}/${id}/upload-image`, image)
    return res.data
}

export default {
    getAllCoffees,
    getDetailCoffee,
    createCoffee,
    updateCoffee,
    deleteCoffee,
    uploadCoffeeImage,
}