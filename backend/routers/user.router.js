const express = require('express')
const {
    authenticate,
} = require('../middlewares/auth/authenticate')
const {
    authorizeAdmin,
    authorizeUserIdOrAdmin,
} = require('../middlewares/auth/authorize')
const {
    uploadImage,
} = require('../middlewares/upload/uploadImage')
const {
    register,
    login,
    getAllUser,
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
    resetTable
} = require('../controllers/user.controller')

const userRouter = express.Router()

userRouter.post('/register', register)
userRouter.post('/login', login)

userRouter.get('/users/get-all', authenticate, authorizeAdmin, getAllUser)
userRouter.get('/users/:id/get-detail', authenticate, authorizeUserIdOrAdmin, getDetailUser)
userRouter.put('/users/:id/update', authenticate, authorizeUserIdOrAdmin, updateUser)
userRouter.delete('/users/:id/delete', authenticate, authorizeAdmin, deleteUser)

userRouter.post('/users/:id/upload-avatar/', authenticate, authorizeUserIdOrAdmin, uploadImage('user', 'avatar'), uploadUserAvatar)

userRouter.put('/users/:id/deposit-money', authenticate, authorizeUserIdOrAdmin, depositMoney)

userRouter.get('/users/:id/choice-base/', authenticate, authorizeUserIdOrAdmin, getTablesByIdBase)
userRouter.post('/users/:id/choice-table/', authenticate, authorizeUserIdOrAdmin, choiceTable)
userRouter.post('/users/:id/choice-coffee/', authenticate, authorizeUserIdOrAdmin, createOrder)
userRouter.get('/users/:id/get-orders/', authenticate, authorizeUserIdOrAdmin, getOrdersByTableId)
userRouter.delete('/users/:id/delete-coffee/', authenticate, authorizeUserIdOrAdmin, deleteOrder)

userRouter.put('/users/:id/payment/', authenticate, authorizeUserIdOrAdmin, paymentOrder, resetTable)

module.exports = {
    userRouter
}