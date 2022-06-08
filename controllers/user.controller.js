const { Users, Tables, Orders, Coffees } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { name, phoneNumber, email, password } = req.body
    try {
        const user = await Users.create({ name, phoneNumber, email, password })
        const saltRounds = 13
        const hashPassword = bcrypt.hashSync(password, saltRounds);
        await user.update({ password: hashPassword })
        res.status(201).send(user)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    if (email.length == 0) {
        res.status(400).json({
            message: 'Email is required'
        })
        return
    }
    if (password.length == 0) {
        res.status(400).json({
            message: 'Password is required'
        })
        return
    }
    try {
        const user = await Users.findOne({ where: { email } })
        if (!user) {
            res.status(404).json({
                message: 'Email not found'
            })
            return
        }
        const isPasswordValid = bcrypt.compareSync(password, user.password)
        if (!isPasswordValid) {
            res.status(401).json({
                message: 'Invalid email or password'
            })
            return
        }
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            type: user.type
        }, 'anh2..cafe-GiotDANG6969!!!!!!', { expiresIn: 60 * 60 * 24 }, { algorithm: 'HS256' }, (err, token) => {
            if (err) {
                res.status(500).json({
                    message: 'Something went wrong',
                    error: err
                })
                return
            }
        })
        res.status(200).json({
            message: 'Login success',
            token
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getAllUser = async (req, res) => {
    try {
        const users = await Users.findAll()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getDetailUser = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const updateUser = async (req, res) => {
    const { name, phoneNumber, email, oldPassword, newPassword } = req.body
    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            await user.update({ name, phoneNumber, email })
            if (oldPassword.length == 0) {
                res.status(400).json({
                    message: 'Old password is required'
                })
                return
            } else if (newPassword.length == 0) {
                res.status(400).json({
                    message: 'New password is required'
                })
                return
            } else if (newPassword.length < 6) {
                res.status(400).json({
                    message: 'New password must be at least 6 characters'
                })
                return
            } else {
                const isPasswordValid = bcrypt.compareSync(oldPassword, user.password)
                if (!isPasswordValid) {
                    res.status(401).json({
                        message: 'Invalid old password'
                    })
                    return
                }
            }
            const saltRounds = 13
            const hashPassword = bcrypt.hashSync(newPassword, saltRounds);
            await user.update({ password: hashPassword })
            res.status(200).json(user)
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            await user.destroy()
            res.status(200).json({
                message: 'User deleted'
            })
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const uploadUserAvatar = async (req, res) => {
    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            const { file } = req
            const urlAvatar = `${req.protocol}://${req.get('host')}/images/user/${file.filename}`
            await user.update({ avatar: urlAvatar })
            res.status(200).json({
                message: 'User avatar updated',
                urlAvatar
            })
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const depositMoney = async (req, res) => {
    const { amount } = req.body
    try {
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        })
        if (user) {
            await user.update({ balance: user.balance + amount })
            res.status(200).json({
                message: 'Deposit success',
                balance: user.balance
            })
        } else {
            res.status(404).json({
                message: 'User not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getTablesByIdBase = async (req, res) => {
    const { baseId } = req.body
    try {
        const tables = await Tables.findAll({
            where: {
                baseId: baseId
            }
        })
        res.status(200).json(tables)
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const choiceTable = async (req, res) => {
    const { tableId } = req.body
    try {
        const user = await Tables.findOne({
            where: {
                userId: req.params.id
            }
        })
        if (user) {
            res.status(400).json({
                message: 'You have already chosen a table'
            })
        } else {
            const table = await Tables.findOne({ where: { id: tableId } })
            if (table.status == 'available') {
                await Tables.update({ status: 'occupied', userId: req.params.id }, { where: { id: tableId } })
                res.status(201).json(table)
            } else {
                res.status(400).json({
                    message: 'Table is occupied'
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const createOrder = async (req, res) => {
    const { tableId } = req.query
    try {
        const table = await Tables.findOne({ where: { id: tableId } })
        if (table && table.status == 'occupied' && table.userId == req.params.id) {
            const coffee = await Coffees.findOne({
                where: {
                    id: req.body.coffeeId
                }
            })
            if (coffee) {
                const isSameCoffee = await Orders.findOne({
                    where: {
                        tableId: tableId,
                        coffeeId: req.body.coffeeId,
                    }
                })
                if (isSameCoffee) {
                    const oldOrder = await Orders.findOne({
                        where: {
                            tableId: tableId,
                            coffeeId: req.body.coffeeId,
                        }
                    })
                    const newAmount = oldOrder.amount += req.body.amount
                    await Orders.update({ amount: newAmount, totalPrice: coffee.price * newAmount }, {
                        where: {
                            tableId: tableId,
                            coffeeId: req.body.coffeeId,
                        }
                    })
                    const newOrder = await Orders.findOne({
                        where: {
                            tableId: tableId,
                            coffeeId: req.body.coffeeId,
                        }
                    })
                    res.status(201).json(newOrder)
                    return
                }
                const order = await Orders.create({
                    tableId: tableId,
                    coffeeId: req.body.coffeeId,
                    amount: req.body.amount,
                    totalPrice: coffee.price * req.body.amount
                })
                res.status(201).json(order)
                return
            } else {
                res.status(404).json({
                    message: 'Coffee not found'
                })
                return
            }
        } else {
            res.status(400).json({
                message: 'This table is not yours'
            })
            return
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const deleteOrder = async (req, res) => {
    const { tableId } = req.query
    try {
        const table = await Tables.findOne({ where: { id: tableId } })
        if (table && table.status == 'occupied' && table.userId == req.params.id) {
            const order = await Orders.findOne({
                where: {
                    tableId: tableId,
                    coffeeId: req.body.coffeeId
                }
            })
            if (order) {
                await Orders.destroy({
                    where: {
                        tableId: tableId,
                        coffeeId: req.body.coffeeId
                    }
                })
                res.status(200).json({
                    message: 'Coffee deleted'
                })
            } else {
                res.status(404).json({
                    message: 'Coffee not found'
                })
            }
        } else {
            res.status(400).json({
                message: 'This table is not yours'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const getOrdersByTableId = async (req, res) => {
    const { tableId } = req.query
    try {
        const table = await Tables.findOne({ where: { id: tableId } })
        if (table && table.status == 'occupied' && table.userId == req.params.id) {
            const orders = await Orders.findAll({
                where: {
                    tableId: tableId
                }
            })
            const totalPrice = orders.reduce((acc, order) => {
                return acc + order.totalPrice
            }, 0)
            if (orders.length == 0) {
                res.status(200).json({
                    message: 'No orders yet'
                })
            }
            res.status(200).json({
                orders,
                totalPrice
            })
        } else {
            res.status(400).json({
                message: 'This table is not yours'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const paymentOrder = async (req, res) => {
    const { tableId } = req.query
    try {
        const table = await Tables.findOne({ where: { id: tableId } })
        if (table && table.status == 'occupied' && table.userId == req.params.id) {
            const orders = await Orders.findAll({
                where: {
                    tableId: tableId
                }
            })
            const totalPrice = orders.reduce((acc, order) => {
                return acc + order.totalPrice
            }, 0)
            if (orders.length == 0) {
                res.status(200).json({
                    message: 'No orders yet'
                })
            }
            const user = await Users.findOne({
                where: {
                    id: req.params.id
                }
            })
            if (user.balance < totalPrice) {
                res.status(400).json({
                    message: 'Not enough money'
                })
            }
            await Users.update({ balance: user.balance - totalPrice }, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({
                message: 'Payment successful'
            })
        } else {
            res.status(400).json({
                message: 'This table is not yours'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}

const resetTable = async (req, res) => {
    const { tableId } = req.query
    try {
        const table = await Tables.findOne({ where: { id: tableId } })
        if (table && table.status == 'occupied' && table.userId == req.params.id) {
            await Orders.destroy({
                where: {
                    tableId: tableId
                }
            })
            await Tables.update({ status: 'available', userId: null }, {
                where: {
                    id: tableId
                }
            })
            res.status(200).json({
                message: 'Table reset'
            })
        } else {
            res.status(400).json({
                message: 'This table is not yours'
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error
        })
    }
}


module.exports = {
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
}