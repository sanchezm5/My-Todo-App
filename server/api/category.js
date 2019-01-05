const express = require('express')
const router = express.Router()
const Tasks = require('../db/Tasks')
const Categories = require('../db/Categories')

//GET ALL CATEGORIES /api/categories
router.get('/', async (req, res, next) => {
    try {
        const categories = await Categories.findAll();
        if(!categories) res.json([]);
        else res.json(categories);
    } catch(err) {
        next(err)
    }
});

module.exports = router