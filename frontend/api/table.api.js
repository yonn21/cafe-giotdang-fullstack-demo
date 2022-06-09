const { tableUrl } = require('./index.js')

const getAllTables = async () => {
    const res = await axios.get(`${tableUrl}/get-all/`)
    return res.data
}

const getDetailTable = async (id) => {
    const res = await axios.get(`${tableUrl}/${id}/get-detail`)
    return res.data
}

const createTable = async (table) => {
    const res = await axios.post(`${tableUrl}/create`, table)
    return res.data
}

const updateTable = async (id, table) => {
    const res = await axios.put(`${tableUrl}/${id}/update`, table)
    return res.data
}

const deleteTable = async (id) => {
    const res = await axios.delete(`${tableUrl}/${id}/delete`)
    return res.data
}

export default {
    getAllTables,
    getDetailTable,
    createTable,
    updateTable,
    deleteTable,
}