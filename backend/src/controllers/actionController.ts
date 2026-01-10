import { Request, Response } from "express";
import { Post } from "../models/post";
import { ActionModel } from "../models/action_collection";
export const handleLike = async (
  req: Request & { userId?: string },
  res: Response
) => {
  try {
    const userId = req.userId;
    if (!userId)
      return res
        .status(401)
        .json({ message: "Unauthorized. Sign in first" });

    const { postId } = req.params;
    if (!postId)
      return res.status(400).json({ message: "Post id is required" });

    const existingLike = await ActionModel.findOne({
      userid: userId,
      targetId: postId,
      action_type: "like",
    });

    if (existingLike) {
      await ActionModel.deleteOne({ _id: existingLike._id });
    } else {
      await ActionModel.create({
        userid: userId,
        targetId: postId,
        action_type: "like",
        value: null,
      });
    }

    const likesCount = await ActionModel.countDocuments({
      targetId: postId,
      action_type: "like",
    });

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $set: { likesCount } },
      { new: true } // 👈 IMPORTANT
    );

    return res.status(200).json({
      message: existingLike
        ? "Post unliked successfully"
        : "Post liked successfully",
      liked: !existingLike,
      post: updatedPost, // 👈 sending the post
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const handleComment = async (req:Request & {userId?:string},res:Response) =>{
  try{
const userId = req.userId
if(!userId)
  return res.status(401).json({message:"Unauthorized to comment.Sign in first"})
const {postId} = req.params
const {comment} =  req.body
if(!postId || !comment){
  return res.status(400).json({message:"Post id and comment are required"})
}
const createdcomment = await ActionModel.create({
  userid:userId,
  targetId:postId,
  action_type:"comment",
  value:comment
})
const commentsCount = await ActionModel.countDocuments({targetId:postId,action_type:"comment"})
await Post.findByIdAndUpdate(postId,{$set:{commentsCount:commentsCount}})
return res.status(200).json({
  message:"Comment added successfully",
  comment:createdcomment
})
  }catch(error){
    console.log(error)
    return res.status(500).json({message:"Internal server error",
      
    })
  }
}
