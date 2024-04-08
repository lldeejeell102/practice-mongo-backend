const mongoose = require('./connection')

const TodoSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean,
})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo;