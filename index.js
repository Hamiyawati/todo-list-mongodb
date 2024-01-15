const express = require('express')
const app = express()
const mongoose = require('mongoose')
const todoRoutes = require('./routes/todo')

require('dotenv').config()

// middleware for JSON parsing
app.use(express.json())

// connect to MongoDB
mongoose.connect(process.env.MONGOS_URI)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection error'))
db.once('open', () => console.log('Connected to Mongodb'))

// todoRoutes for handling routes
app.use(todoRoutes)

// start server and listen on configured port
app.listen(process.env.PORT, () => {
    console.log(`Listen to port: ${process.env.PORT}`)
})