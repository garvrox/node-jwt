const Router = require('express').Router()
const { checkToken } = require('../auth/validation')
const { login } = require('../modal/login/controller')
const {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser
} = require('../modal/users/controller')

// Users Routes
Router.post('/users', checkToken, createUser)
Router.get('/users', checkToken, getUsers)
Router.get('/users/:id', checkToken, getUserById)
Router.put('/users', checkToken, updateUser)
Router.delete('/users', checkToken, deleteUser)

// Login Routes
Router.post('/login', login)
module.exports = Router
