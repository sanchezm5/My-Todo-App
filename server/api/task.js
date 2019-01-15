const express = require('express')
const router = express.Router()
const {Categories, Tasks} = require('../db')

//GET ALL TASKS /api/tasks
router.get('/', async (req, res, next) => {
  try {
    const tasks = await Tasks.findAll();
    if (!tasks) res.sendStatus(404);
    else res.json(tasks);
  } catch (err) {
    next(err)
  }
});

//GET A TASK BY ID /api/tasks/:taskId
router.get('/:taskId',  async (req, res, next) => {
  try {
    const task =  await Tasks.findByPk(req.params.taskId,
        {include: {model: Categories}});
    if (!task) res.sendStatus(404)
    else res.json(task);
  } catch (err) {
    next(err);
  }
});

//ADD TASK /api/task
router.post('/', async (req, res, next) => {
  try {
    const task = await Tasks.create({
      task: req.body.task,
      dueDate: req.body.dueDate,
      notes: req.body.notes,
      categoryId: +req.body.categoryId
    });
    res.status(201).send(task);
  } catch (err) {
      next(err);
  }
});

module.exports = router
