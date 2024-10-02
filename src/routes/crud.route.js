const express = require('express');
const crudController = require('../controllers/crud.controller');
const router = express.Router();

//food
router.post('/add-food', crudController.handleAddFood);
router.put('/update-food', crudController.handleUpdateFood);
router.delete('/delete-food', crudController.handleDeleteFood);
router.get('/get-all-food', crudController.handleGetAllFood);
router.get('/get-food', crudController.handleGetFood);

//location
router.post('/add-location', crudController.handleAddFood);
router.post('/add-user', crudController.handleAddFood);
module.exports = router;
