const express = require('express')
const user = express.Router()
const userController = require('../controllers/user')
const authMiddleware = require('../middleware/auth')

// endpoint for fetching user profile
user.get('/profile', authMiddleware.verifyToken, userController.getUsername)

module.exports = user