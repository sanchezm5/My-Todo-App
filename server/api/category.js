const express = require('express')
const router = express.Router()
const {Categories, Tasks} = require('../db')

//GET ALL CATEGORIES /api/categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Categories.findAll();
    if (!categories) res.sendStatus(404)
    else res.json(categories);
  } catch (err) {
    next(err)
  }
});

//GET CATEGORY BY ID /api/categories/:categoryId
router.get('/:categoryId', async (req, res, next) => {
  try {
    const category = await Categories.findByPk(req.params.categoryId,
      {include: {model: Tasks}});
    if (!category) res.sendStatus(404);
    else res.json(category);
  } catch (err) {
    next(err);
  }
});

//ADD CATEGORY /api/categories
router.post('/', async (req, res, next) => {
  try {
    const category = await Categories.create({
      title: req.body.title
    });
    res.status(201).send(category);
  } catch (err) {
    next(err);
  }
});

module.exports = router
