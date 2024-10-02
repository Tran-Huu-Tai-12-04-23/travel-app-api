const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const homeRouter = require('./main.route');
const locationRouter = require('../middlewares/location.route');
const foodRouter = require('./food.route');
const featureRouter = require('./feature.router');
const verifyToken = require('../middlewares/verifyToken.middleware');

//test crud
const crudRouter = require('./crud.route');
router.use('/auth', authRouter);
router.use('/crud', crudRouter);

router.use('/home', verifyToken, homeRouter);
router.use('/location', verifyToken, locationRouter);
router.use('/food', verifyToken, foodRouter);
router.use('/feature', verifyToken, featureRouter);

module.exports = router;
