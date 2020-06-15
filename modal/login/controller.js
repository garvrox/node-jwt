const { compareSync } = require('bcrypt')
const { successResponse, errorResponse } = require('../../utils/apiResponse')
const { sign } = require('jsonwebtoken')
const { getUserByEmail } = require('../users/service')

const handleError = (err, res) => errorResponse({
    message: 'Database connection error'
}, res)

module.exports = {
    login: (req, res) => {
        const body = req.body
        getUserByEmail(body, (err, results) => {
            if (err) return handleError(err, res)
            if (!results) {
                return errorResponse({
                    message: 'Invalid email or password'
                }, res)
            }
            const result = compareSync(body.password, results.password)
            if (result) {
                results.password = undefined
                const jsonToken = sign({ result: results }, process.env.JWT_ENCRYPT_KEY, {
                    expiresIn: '1h'
                })
                return successResponse({
                    message: 'Login successfully',
                    token: jsonToken
                }, res)
            } else {
                return errorResponse({
                    message: 'Invalid email or password'
                }, res)
            }
        })
    }
}