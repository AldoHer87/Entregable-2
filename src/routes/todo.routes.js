const { Router } = require('express');
const Todo = require('../models/todos.model')

const router = Router();

router.get('/api/v1/todos', async (req, res) => {
    try {
        const toDo = await Todo.findAll({
            attributes: ["title", "description", "status"],
        });
        res.json(toDo);
    } catch (error) {
        res.status(400).json(error);
    }
});


router.post('/api/v1/todos', async (req, res) => {
    try {
        const newToDo = req.body;
        const result = await User.create(newToDo)
        res.status(201).send(result)
    } catch (error) {
        res.status(400).json(error)
    }
});

router.put('/api/v1/todos/:id', async (req, res) => {
    try {
        const {id } = req.params;
        const data = req.body;
        await Todo.update(data, {
            where: {id}
        });
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});


router.delete('/api/v1/todos/:id', async (req, res) => {
    try {
        const { id } = req.params; // objeto
        const result = await Todo.destroy({
            where: {id},
        })
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;