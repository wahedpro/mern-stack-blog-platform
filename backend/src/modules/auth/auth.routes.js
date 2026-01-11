const express = require('express');
const { createUserHandler } = require('./auth.controller'); 
const router = express.Router();

// Route for user registration
router.post('/register', createUserHandler);    
module.exports = router;