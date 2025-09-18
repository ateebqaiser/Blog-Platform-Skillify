import mongoose, { version } from "mongoose";

const commentSchema=new mongoose.Schema(
    {
        postId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post",
            required:true
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },
        content:{
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

export const Comment=mongoose.model("Comment",commentSchema)