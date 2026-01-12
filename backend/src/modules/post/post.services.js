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

module.exports = {
  createPost,
  getAllPublicPosts,
  getSinglePublicPost,
};
