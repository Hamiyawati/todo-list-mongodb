const express = require('express')
const app = express
const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization

  // check the token
  if (!token) {
    return res.status(401).json({ message: 'Missing token' })
  }

  // verify the JWT token
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    // check the token verification
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }

    req.user = user
    next()
  })
}

module.exports = {
  verifyToken
}
