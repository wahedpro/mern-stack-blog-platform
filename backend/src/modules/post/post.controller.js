const postService = require("../post/post.services");

// create post controller
const createPostController = async (req, res) => {
  try {
    const userId = req.user.id;
    const post = await postService.createPost(req.body, userId);

    res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// get all published posts controller
const getAllPublicPostsController = async (req, res) => {
  try {
    const posts = await postService.getAllPublicPosts();

    res.status(200).json({
      success: true,
      message: "Public posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createPostController,
  getAllPublicPostsController,
};
