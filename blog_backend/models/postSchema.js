import mongoose, { Schema } from "mongoose";

const postSchema=new mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    {versionKey:false}
)

export const Post=mongoose.model("Post",postSchema);