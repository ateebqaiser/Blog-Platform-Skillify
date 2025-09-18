import express from "express";
import { Comment } from "../models/commentSchema.js";

const router = express.Router();

// Create comment
router.post("/", async (req, res) => {
  const comment = await Comment.create(req.body);
  res.json(comment);
});

// Get comments by postId
router.get("/:postId", async (req, res) => {
  const comments = await Comment.find({ postId: req.params.postId });
  res.json(comments);
});

export default router;
