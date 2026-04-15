const express = require('express')
const authController = require('../controllers/auth.controller')
const authRouter = express.Router()
const authMiddleware  = require('../middlewares/auth.middleware')

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 * **/

authRouter.post('/register', authController.registerController)

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 * **/

authRouter.post('/login', authController.loginController)


/**
 * @route POST /api/auth/logout
 * @description Logout a user
 * @access Private
 * **/ 

authRouter.get('/logout', authController.logoutController)

//**
  // @route GET /api/auth/me
// @description Get current user
// @access Private
// **/

authRouter.get('/me',authMiddleware.authUser, authController.getMeController)

module.exports = authRouter