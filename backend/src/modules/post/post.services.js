const Post = require('../post/post.model');

// create post service
const createPost = async (data, userId) => {
  data.userId = userId;

  if (data.status === 'PUBLISHED') {
    data.publishedAt = new Date();
  } else {
    data.publishedAt = null;
  }

  const post = await Post.create(data);
  return post;
};


module.exports = {
  createPost
};
