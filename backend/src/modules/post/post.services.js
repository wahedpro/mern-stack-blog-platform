const Post = require("../post/post.model");

// create post service
const createPost = async (data, userId) => {
  data.userId = userId;

  if (data.status === "PUBLISHED") {
    data.publishedAt = new Date();
  } else {
    data.publishedAt = null;
  }

  const post = await Post.create(data);
  return post;
};

// get all published posts service
const getAllPublicPosts = async () => {
  const posts = await Post.find({
    status: "PUBLISHED",
  }).sort({ publishedAt: -1 });

  return posts;
};

// get single published post by id
const getSinglePublicPost = async (id) => {
  const post = await Post.findOne({_id: id});
  return post;
};

// get posts by logged-in user
const getPostsByLoggedInUser = async (userId) => {
  const posts = await Post.find({
    userId: userId
  });
  return posts;
};

// update post 
const updatePost = async (postId, userId, updateData) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error('Post not found');
  }

  if (post.userId.toString() !== userId.toString()) {
    throw new Error('You are not allowed to update this post');
  }
  delete updateData.status;
  delete updateData.publishedAt;

  Object.assign(post, updateData);

  await post.save();
  return post;
};

// delete post
const deletePost = async (postId, userId) => {
  const post = await Post.findById(postId);

  if (!post) {
    throw new Error('Post not found');
  }

  if (post.userId.toString() !== userId.toString()) {
    throw new Error('You are not allowed to delete this post');
  }

  await post.deleteOne();
  return true;
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllPublicPosts,
  getSinglePublicPost,
  getPostsByLoggedInUser
};
