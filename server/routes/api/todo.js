const express = require('express');
const Todo = require('../../../models/todo')

const router = express.Router();

// GET Todo
router.get('/', async (req, res) => {
    try{
        res.json(await Todo.find({}))
    }catch(error){
        res.status(400).json(error)
        console.log("Read error logs: ", error)
    }
})


// ADD Todo
router.post('/', async(req, res) => {
    try{
        res.json(await Todo.create(req.body))
    }catch(error){
        console.log("Read error logs: ", error)
    }
})

// DELETE Todo
router.delete('/:id', async (req, res) => {
    try{
        res.json(await Todo.findByIdAndDelete(req.params.id))
    }catch(error){
        console.log("Read error logs: ", error)
    }
})

// FIND Todo
router.get('/:id', async (req, res) => {
    try{
        res.json(await Todo.findById(req.params.id, req.body))
    }catch(error){
        console.log("Read error logs: ", error)
    }
})


// UPDATE Todo
router.put('/:id', async (req, res) => {
    try{
        res.json(await Todo.findByIdAndUpdate(req.params.id, req.body))
    }catch(error){
        console.log("Read error logs: ", error)
    }
})

module.exports = router;