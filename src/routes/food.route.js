const express = require('express');
const foodController = require('../controllers/food.controller');
const router = express.Router();

router.post('/near-by-search', foodController.findNearest);
router.get('/find-detail-food', foodController.getFoodDetail);

module.exports = router;
