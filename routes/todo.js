const express = require('express')
const router = express.Router()

const {
    getAllTodo,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
    deleteAllTodos
} = require('../controllers/todo')

// endpoints for todo
// get all the todos
router.get('/todos', getAllTodo)

// get detail todo
router.get('/todo/:id', getTodoById)

// create a todo
router.post('/todo', createTodo)

// update a todo
router.patch('/todo/:id', updateTodo)

// delete a todo
router.delete('/todo/:id', deleteTodo)

// delete all todos
router.delete('/todos', deleteAllTodos)

module.exports = router