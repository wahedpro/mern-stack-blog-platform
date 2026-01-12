const express = require('express');
const { createUserHandler, loginUserHandler } = require('./auth.controller'); 
const router = express.Router();

// Route for user registration
router.post('/register', createUserHandler);    
router.post('/login', loginUserHandler);


module.exports = router;