const express = require('express');
const locationController = require('../controllers/location.controller');
const router = express.Router();

router.post('/near-by-search', locationController.findNearest);
router.get('/get-location-detail', locationController.getLocationDetail);

module.exports = router;
