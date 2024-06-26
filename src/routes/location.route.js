const express = require('express');
const locationController = require('../controllers/location.controller');
const router = express.Router();

router.post('/near-by-search', locationController.findNearest);
router.get('/find-detail-location', locationController.getLocationDetail);

module.exports = router;
