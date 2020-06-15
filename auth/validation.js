const { verify } = require('jsonwebtoken')
const { errorResponse } = require('../utils/apiResponse')
module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get('authorization')
        if (token) {
            token = token.slice(7) // As getting: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiZW1haWwiOiJnYXJ2QGdtYWlsLmNvbSJ9LCJpYXQiOjE1OTIxNDkwMDIsImV4cCI6MTU5MjE1MjYwMn0.rB8X-q7Vyz6UU-WXLvQOPBALpTK9JE7q8XkYEoBNhGg
            verify(token, process.env.JWT_ENCRYPT_KEY, (err, decoded) => {
                if (err) return errorResponse({ message: 'Access denied!, unauthorized user' }, res)
                next()  
            })
        } else {
            errorResponse({ message: 'Access denied!, unauthorized user' }, res)
        }
    }
}