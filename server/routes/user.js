const express = require('express')
const router = express.Router();
const {loginUser, signupUser} = require('../controllers/userController')

//login route
router.post('/login', loginUser)

//register route
router.post('/register', signupUser)

module.exports = router