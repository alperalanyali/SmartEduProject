const express = require('express');
const router = express.Router();

const userController = require('../controllers/authController')


router.route('/register').post(userController.register);
router.route('/login').post(userController.loginUser);

module.exports = router;