const Todo = require('../models/todo')

const getAllTodo = async (req, res) => {
  try {
    const data = await Todo.find()

    res.status(200).json(data)
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong in finding all todos' })
  }
}

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Todo.findById(id)

    res.status(200).json(data)
  } catch (err) {
    res.status(400).json({ message: 'Todo not found' })
  }
}

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body

    const payload = {
      title,
      description: description || '',
      status: 'Incomplete'
    }

    await Todo.create(payload)

    res.status(201).json({ message: 'Todo created' })
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong' })
  }
}

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, status } = req.body

    const payload = {
      title,
      description,
      status
    }

    await Todo.findByIdAndUpdate(id, payload)

    res.status(201).json({ message: 'Todo updated' })
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong while updating the todo' })
  }
}

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params

    await Todo.findByIdAndDelete(id)

    res.status(200).json({ message: 'Todo deleted successfully!' })
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong while deleting the todo' })
  }
}

const deleteAllTodos = async (req, res) => {
  try {
    await Todo.deleteMany({})

    res.status(200).json({ message: 'All todos deleted successfully!' })
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong while deleting all todos' })
  }
}

module.exports = {
  getAllTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos
}