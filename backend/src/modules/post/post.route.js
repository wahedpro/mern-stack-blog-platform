const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middlewares/authMiddleware');
const { createPostController } = require('../post/post.controller');

router.post('/', authMiddleware, createPostController);

module.exports = router;