const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: 'Incomplete' }
}, {
    timestamps: true,
    versionKey: false,
    collection: 'todo'
})

module.exports = mongoose.model('Todo', todoSchema)