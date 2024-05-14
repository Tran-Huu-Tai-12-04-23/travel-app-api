const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/login-with-google', authController.loginWithGoogle);
router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;
