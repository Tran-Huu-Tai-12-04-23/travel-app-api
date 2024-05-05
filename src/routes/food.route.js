const express = require('express');
const foodController = require('../controllers/food.controller');
const router = express.Router();

router.post('/near-by-search', foodController.findNearest);
router.get('/get-food-detail', foodController.getFoodDetail);

module.exports = router;
