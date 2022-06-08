const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const token = req.header('token')
    try {
        const decode = jwt.verify(token, 'anh2..cafe-GiotDANG6969!!!!!!')
        if (decode) {
            req.user = decode
            next()
        }
    } catch (error) {
        res.status(401).json({
            message: 'You are not logged in'
        })
    }
}

module.exports = {
    authenticate,
}