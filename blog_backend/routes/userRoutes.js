import express from "express";
import { User } from "../models/userSchema.js";

const router = express.Router();

// Create User
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

//Get All Users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//Get User by ID
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

export default router;
