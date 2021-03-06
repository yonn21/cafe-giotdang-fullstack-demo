const register = async (user) => {
    const res = await axios.post(`http://localhost:2108/register`, user)
    return res.data
}

const login = async (user) => {
    const res = await axios.post(`http://localhost:2108/login`, user)
    return res.data
}

const logout = async () => {
    const res = await axios.get(`http://localhost:2108/logout`)
    return res.data
}

const getAllUsers = async () => {
    const res = await axios.get(`http://localhost:2108/users/get-all/`)
    return res.data
}

const getDetailUser = async (id) => {
    const res = await axios.get(`http://localhost:2108/users/${id}/get-detail`)
    return res.data
}

const updateUser = async (id, user) => {
    const res = await axios.put(`http://localhost:2108/users/${id}/update`, user)
    return res.data
}

const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:2108/users/${id}/delete`)
    return res.data
}

const uploadUserAvatar = async (id, avatar) => {
    const res = await axios.post(`http://localhost:2108/users/${id}/upload-avatar`, avatar)
    return res.data
}

const depositMoney = async (id, money) => {
    const res = await axios.put(`http://localhost:2108/users/${id}/deposit-money`, money)
    return res.data
}

const getTablesByIdBase = async (id) => {
    const res = await axios.get(`http://localhost:2108/users/${id}/choice-base/`)
    return res.data
}

const choiceTable = async (id, table) => {
    const res = await axios.post(`http://localhost:2108/users/${id}/choice-table`, table)
    return res.data
}

const createOrder = async (id, order) => {
    const res = await axios.post(`http://localhost:2108/users/${id}/choice-coffee`, order)
    return res.data
}

const getOrdersByTableId = async (id) => {
    const res = await axios.get(`http://localhost:2108/users/${id}/get-orders/`)
    return res.data
}

const deleteOrder = async (id, order) => {
    const res = await axios.delete(`http://localhost:2108/users/${id}/delete-coffee`, order)
    return res.data
}

const paymentOrder = async (id, order) => {
    const res = await axios.put(`http://localhost:2108/users/${id}/payment/`, order)
    return res.data
}

export {
    register,
    login,
    logout,
    getAllUsers,
    getDetailUser,
    updateUser,
    deleteUser,
    uploadUserAvatar,
    depositMoney,
    getTablesByIdBase,
    choiceTable,
    createOrder,
    getOrdersByTableId,
    deleteOrder,
    paymentOrder,
}