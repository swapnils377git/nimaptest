const express = require('express');
const router = express.Router();
// const { categoryController } = require('../controllers/category');
const CategoryController = require('../controllers/category');

router.post('/', CategoryController.create);
console.log('category route');
module.exports = router;