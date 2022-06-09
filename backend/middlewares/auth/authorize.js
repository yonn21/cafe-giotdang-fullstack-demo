const authorizeAdmin = (req, res, next) => {
    const { user } = req
    if (user.type === 'admin') {
        next()
    } else {
        res.status(403).json({
            message: 'You are not authorized'
        })
    }
}

const authorizeUserIdOrAdmin = (req, res, next) => {
    const { user } = req
    if (user.id == req.params.id || user.type === 'admin') {
        next()
    } else {
        res.status(403).json({
            message: 'You are not authorized'
        })
    }
}

const authorizeUserId = (req, res, next) => {
    const { user } = req
    if (user.id == req.params.id) {
        next()
    } else {
        res.status(403).json({
            message: 'You are not authorized'
        })
    }
}

module.exports = {
    authorizeAdmin,
    authorizeUserIdOrAdmin,
    authorizeUserId,
}