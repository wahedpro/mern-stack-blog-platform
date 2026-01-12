const express = require('express');
const router = express.Router();

const authMiddleware = require('../../middlewares/authMiddleware');
const { createPostController, getAllPublicPostsController, getSinglePublicPostByIdController, getMyPostsController, updatePostController, deletePostController, publishPostController } = require('../post/post.controller');

// publish post
router.get('/', getAllPublicPostsController);
router.get('/id/:id', getSinglePublicPostByIdController);

// logged-in user
// create post
router.post('/', authMiddleware, createPostController);
// get posts 
router.get('/my-posts', authMiddleware, getMyPostsController);
// update post
router.patch('/:id', authMiddleware, updatePostController);
// delete post
router.delete('/:id', authMiddleware, deletePostController);
// admin only
router.patch( '/:id/publish',authMiddleware('admin'), publishPostController);

module.exports = router;