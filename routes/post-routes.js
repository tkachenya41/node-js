const express = require("express");
const {
  getPost,
  editPost,
  updatePost,
  deletePost,
  getPosts,
  addPost,
  getAddPost,
} = require("../controllers/post-controller");
const router = express.Router();

router.get("/posts/:id", getPost);
router.get("/edit/:id", editPost);
router.put("/edit/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts", getPosts);
router.post("/add-post", getAddPost);
router.get("/add-post", addPost);

module.exports = router;
