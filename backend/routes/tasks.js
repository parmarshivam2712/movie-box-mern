const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST create new task
router.post('/', async (req, res) => {
    try {
        const { title, priority } = req.body;
        const newTask = new Task({ title, priority });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PATCH update status
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// GET single task by ID
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// PUT update full task (title, priority, status)
router.put('/:id', async (req, res) => {
    try {
        const { title, priority, status } = req.body;
        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            { title, priority, status },
            { new: true, runValidators: true }
        );
        if (!updated) return res.status(404).json({ error: 'Task not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;