const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middlewares/authMiddleware');
const { createPostController, getAllPublicPostsController } = require('../post/post.controller');

router.post('/', authMiddleware, createPostController);
router.get('/', getAllPublicPostsController);

module.exports = router;