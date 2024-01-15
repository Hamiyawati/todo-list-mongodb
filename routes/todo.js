const express = require('express')
const router = express.Router()

const {
    createTodo,
    getAllTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    deleteAllTodos
} = require('../controllers/todo')

// endpoints for todo
router.param('/todoId', getTodoById)

// get all the todos
router.get('/todos', getAllTodos)

// create a todo
router.post('/todo/', createTodo)

// update todo
router.put('/todo/:todoId/', updateTodo)

// delete todo
router.delete('/todo/:todoId', deleteTodo)

// delete all todos
router.delete('/todos', deleteAllTodos)

module.exports = router