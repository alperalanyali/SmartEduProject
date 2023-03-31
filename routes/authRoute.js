const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware');

const userController = require('../controllers/authController')


router.route('/register').post(
    [
        body('name').not().isEmpty().withMessage('Please enter your name'),
        body('email').not().isEmpty().withMessage('Please enter your emai'),
        body('password').not().isEmpty().withMessage('Please enter your password')
    ]
    ,userController.register);
router.route('/login').post(userController.loginUser);
router.route('/logout').get(userController.logoutUser);
router.route('/dashboard').get(authMiddleware,userController.getDashboardPage);
module.exports = router;