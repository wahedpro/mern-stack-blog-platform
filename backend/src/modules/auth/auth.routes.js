const express = require('express');
const { createUserHandler, loginUserHandler, registerWithInvite } = require('./auth.controller'); 
const router = express.Router();

// Route for user registration
router.post('/register', createUserHandler);    
router.post('/login', loginUserHandler);
router.post('/register-invite', registerWithInvite);

module.exports = router;