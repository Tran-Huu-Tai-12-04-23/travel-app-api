const express = require('express');
const commonController = require('../controllers/common.controller');
const router = express.Router();

router.post('/suggest-schedule', commonController.suggestScheduleForUser);

module.exports = router;
