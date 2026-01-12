const postService = require('../post/post.services');

const createPostController = async (req, res) => {
  try {
    const userId = req.user.id;
    const post = await postService.createPost(req.body, userId);

    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: post
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  createPostController
};
