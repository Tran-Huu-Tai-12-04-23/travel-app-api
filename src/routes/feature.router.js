const express = require('express');
const commonController = require('../controllers/common.controller');
const router = express.Router();
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/suggest-schedule', commonController.suggestScheduleForUser);
router.post('/predict', commonController.predictImg);

module.exports = router;
