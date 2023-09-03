const express = require("express");
const {
  getPost,
  editPost,
  deletePost,
  getPosts,
  getAddPost,
} = require("../controllers/api-post-controller");
const router = express.Router();

//Get All
router.get("/api/posts", getPosts);
//Add a new post
router.post("/api/add-post", getAddPost);
//Get post by id
router.get("/api/post/:id", getPost);
//Delete post by id
router.delete("/api/post/:id", deletePost);
//Update post by id
router.put("/api/edit/:id", editPost);

module.exports = router;
