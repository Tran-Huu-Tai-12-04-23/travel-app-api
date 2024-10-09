const express = require('express');
const crudController = require('../controllers/api.controller');
const router = express.Router();

//food
router.post('/add-food', crudController.handleAddFood);
router.put('/update-food', crudController.handleUpdateFood);
router.delete('/delete-food', crudController.handleDeleteFood);
router.get('/get-all-food', crudController.handleGetAllFood);
router.get('/get-food', crudController.handleGetFood);
router.post('/add-more-food', crudController.handleAddMoreFood);

//location
router.post('/add-location', crudController.handleAddLocation);
router.put('/update-location', crudController.handleUpdateLocation);
router.delete('/delete-location', crudController.handleDeleteLocation);
router.get('/get-all-location', crudController.handleGetAllLocation);
router.get('/get-location', crudController.handleGetLocation);
router.post('/add-more-location', crudController.handleAddMoreLocation);
module.exports = router;
