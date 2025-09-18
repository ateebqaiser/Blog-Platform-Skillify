import mongoose from "mongoose";
import {User} from "./models/userSchema.js";
import {Post} from "./models/postSchema.js";
import {Comment} from "./models/commentSchema.js";


const uri = "mongodb://localhost:27017/blogDB";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log("MongoDB connected successfully");

export async function viewUsers() {
  return await User.find();
}

export async function createUser(json) {
  await User.create({
    username: json.username,
    password: json.password,
  });
}

export async function viewPosts() {
  return await Post.find();
}

export async function createPost(json) {
  await Post.create({
    title: json.title,
    content: json.content,
    author: json.author,
    date: new Date(),
  });
}

export async function updatePost(id, json) {
  await Post.updateOne(
    { _id: id },
    {
      title: json.title,
      content: json.content,
      author: json.author,
      date: new Date(),
    }
  );
}

export async function deletePost(id) {
  await Post.deleteOne({ _id: id });
}

export async function viewComments() {
  return await Comment.find();
}

export async function createComment(json) {
  await Comment.create({
    postId: json.postId,
    userId: json.userId,
    content: json.content,
    date: new Date(),
  });
}
