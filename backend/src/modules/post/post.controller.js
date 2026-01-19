const postService = require("../post/post.services");

// create post controller
const createPostController = async (req, res) => {
  try {
    const userId = req.user.id;
    const post = await postService.createPost(req.body, userId);

    console.log('Created Post:', post);

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

// get single published post controller
const getSinglePublicPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postService.getSinglePublicPost(id);

    res.status(200).json({
      success: true,
      message: 'Post fetched successfully',
      data: post
    });

  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

// get posts by logged-in user controller
const getMyPostsController = async (req, res) => {
  try {
    const userId = req.user.id;

    const posts = await postService.getPostsByLoggedInUser(userId);

    res.status(200).json({
      success: true,
      message: 'Your posts fetched successfully',
      data: posts
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// update post controller
const updatePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const updatedPost = await postService.updatePost(
      postId,
      userId,
      req.body
    );

    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: updatedPost
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const deletePostController = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    await postService.deletePost(postId, userId);

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully'
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// publish post by admin
const publishPostController = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await postService.publishPostByAdmin(postId);

    res.status(200).json({
      success: true,
      message: 'Post published successfully',
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
  createPostController,
  updatePostController,
  deletePostController,
  publishPostController,
  getAllPublicPostsController,
  getSinglePublicPostByIdController,
  getMyPostsController
};
