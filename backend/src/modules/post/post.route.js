const express = require("express");
const router = express.Router();

const authMiddleware = require("../../middlewares/authMiddleware");
const {
  createPostController,
  getAllPublicPostsController,
  getSinglePublicPostByIdController,
  getMyPostsController,
  updatePostController,
  deletePostController,
  publishPostController,
} = require("../post/post.controller");

// publish post
router.get("/my-posts", authMiddleware("user", "admin"), getMyPostsController);
router.get("/", getAllPublicPostsController);
router.get("/id/:id", getSinglePublicPostByIdController);

// logged-in user
// create post
router.post("/", authMiddleware("user", "admin"), createPostController);
// get posts
// update post
router.patch("/:id", authMiddleware("user", "admin"), updatePostController);
// delete post
router.delete("/:id", authMiddleware("user", "admin"), deletePostController);
// admin only
router.patch("/:id/publish", authMiddleware("admin"), publishPostController);

module.exports = router;
