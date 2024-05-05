const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const homeRouter = require('./main.route');
const locationRouter = require('./location.route');
const foodRouter = require('./food.route');
const verifyToken = require('../middlewares/verifyToken.middleware');

router.use('/auth', authRouter);
router.use('/home', verifyToken, homeRouter);
router.use('/location', verifyToken, locationRouter);
router.use('/food', verifyToken, foodRouter);

module.exports = router;
