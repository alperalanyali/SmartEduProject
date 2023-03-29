const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');

const userController = require('../controllers/authController')


router.route('/register').post(userController.register);
router.route('/login').post(userController.loginUser);
router.route('/logout').get(userController.logoutUser);
router.route('/dashboard').get(authMiddleware,userController.getDashboardPage);
module.exports = router;