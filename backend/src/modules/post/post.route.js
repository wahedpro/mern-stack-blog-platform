const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middlewares/authMiddleware');
const { createPostController, getAllPublicPostsController, getSinglePublicPostByIdController } = require('../post/post.controller');

router.post('/', authMiddleware, createPostController);
router.get('/', getAllPublicPostsController);
router.get('/id/:id', getSinglePublicPostByIdController);

module.exports = router;