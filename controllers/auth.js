const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const saltRounds = 10

// user registration endpoint
const register = (req, res) => {
  const { username, password} = req.body
  
  // hash the password using bcrypt
  const hashedPassword = bcrypt.hashSync(password, saltRounds)
  const user = {
    username,
    password: hashedPassword
  }

  User.push(user)

  return res.status(201).json({ message: 'Register successfully' })
}

// user login endpoint
const login = (req, res) => {
  const { username, password} = req.body

  const dataUser = User.find((user) => user.username == username)

  if (!dataUser) {
    return res.status(401).json({ message: 'Username not found' })
  }
  
  // compare the provide password with the stored hashed password
  if (bcrypt.compareSync(password, dataUser.password)) {
    // generate a JWT token
    const token = jwt.sign(username, process.env.JWT_SECRET)

    res.status(200).json({ token })
  } else {
    return res.status(401).json({ message: 'Wrong password' })
  }
}

module.exports = {
  register,
  login
}