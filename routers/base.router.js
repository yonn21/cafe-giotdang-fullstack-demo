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
    getAllBases,
    getDetailBase,
    createBase,
    updateBase,
    deleteBase,
    uploadBaseThumbnail,
} = require('../controllers/base.controller')

const baseRouter = express.Router()

baseRouter.get('/get-all/', getAllBases)
baseRouter.get('/:id/get-detail', getDetailBase)
baseRouter.post('/create', authenticate, authorizeAdmin, createBase)
baseRouter.put('/:id/update', authenticate, authorizeAdmin, updateBase)
baseRouter.delete('/:id/delete', authenticate, authorizeAdmin, deleteBase)

baseRouter.post('/:id/upload-thumbnail', authenticate, authorizeAdmin, uploadImage('base', 'thumbnail'), uploadBaseThumbnail)

module.exports = {
    baseRouter
}