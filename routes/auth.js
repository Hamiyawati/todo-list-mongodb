const express = require('express')
const auth = express.Router()
// const authController = require('../controllers/auth')

const {
    register,
    login
} = require('../controllers/auth')

// endpoints for user register and login
auth.post('/register', register)
auth.post('/login', login)

module.exports = auth