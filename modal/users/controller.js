const { genSaltSync, hashSync } = require('bcrypt')
const { successResponse, errorResponse } = require('../../utils/apiResponse')
const { 
    create, 
    getUsers, 
    getUserById, 
    getUserByEmail, 
    updateUser, 
    deleteUser 
} = require('./service')

const generatePasswordHash = (str) => {
    const salt = genSaltSync(10)
    return hashSync(str, salt);
}

const handleError = (err, res) => errorResponse({
    message: 'Database connection error'
}, res)

module.exports = {
    createUser: (req, res) => {
        const body = req.body
        body.password = generatePasswordHash(body.password)
        create(body, (err, results) => {
            if (err) return handleError(err, res)
            return successResponse({
                data: results
            }, res)
        })
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) return handleError(err, res)
            if (!results) {
                return errorResponse({
                    message: 'Records not found'
                }, res)
            }
            return successResponse({
                data: results
            }, res)
        })
    },
    getUserById: (req, res) => {
        const id = req.params.id
        getUserById(id, (err, results) => {
            if (err) return handleError(err, res)
            if (!results) {
                return errorResponse({
                    message: 'Record not found'
                }, res)
            }
            return successResponse({
                data: results
            }, res)
        })
    },
    updateUser: (req, res) => {
        const body = req.body
        body.password = generatePasswordHash(body.password)
        updateUser(body, (err, results) => {
            if (err) return handleError(err, res)
            return successResponse({
                message: 'Record updated successfully'
            }, res)
        })
    },
    deleteUser: (req, res) => {
        const body = req.body
        deleteUser(body, (err, results) => {
            if (err) return handleError(err, res)
            return successResponse({
                message: 'User deleted successfully'
            }, res)
        })
    }
}