import express from "express";
import { Post } from "../models/postSchema.js";

const router = express.Router();

// Create Post
router.post("/", async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
});

// Get All Posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// Update Post
router.put("/:id", async (req, res) => {
  await Post.updateOne({ _id: req.params.id }, req.body);
  res.json({ message: "Post Updated" });
});

// Delete Post
router.delete("/:id", async (req, res) => {
  await Post.deleteOne({ _id: req.params.id });
  res.json({ message: "Post Deleted" });
});

export default router;
