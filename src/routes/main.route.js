const express = require('express');
const homeController = require('../controllers/home.controller');
const router = express.Router();

router.post('/', homeController.getHomeData);

module.exports = router;
