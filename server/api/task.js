const express = require('express')
const router = express.Router()
const Tasks = require('../db/Tasks')
const Categories = require('../db/Categories')

//GET ALL TASKS /api/tasks
router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.findAll();
        if(!tasks) res.json([]);
        else res.json(tasks);
    } catch(err) {
        next(err)
    }
})

module.exports = router