const { baseUrl } = require('./index')

const getAllBases = async () => {
    const res = await axios.get(`${baseUrl}/get-all/`)
    return res.data
}

const getDetailBase = async (id) => {
    const res = await axios.get(`${baseUrl}/${id}/get-detail`)
    return res.data
}

const createBase = async (base) => {
    const res = await axios.post(`${baseUrl}/create`, base)
    return res.data
}

const updateBase = async (id, base) => {
    const res = await axios.put(`${baseUrl}/${id}/update`, base)
    return res.data
}

const deleteBase = async (id) => {
    const res = await axios.delete(`${baseUrl}/${id}/delete`)
    return res.data
}

const uploadBaseThumbnail = async (id, thumbnail) => {
    const res = await axios.post(`${baseUrl}/${id}/upload-thumbnail`, thumbnail)
    return res.data
}

export default {
    getAllBases,
    getDetailBase,
    createBase,
    updateBase,
    deleteBase,
    uploadBaseThumbnail,
}