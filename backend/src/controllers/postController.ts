import { Request, Response } from "express";
import { Post } from "../models/post";
import { CreatePostInput } from "../validators/postSchema";

export const createPost = async (req: Request & { userId?: string }, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, description, tags = [], media = [] } =
      req.body as CreatePostInput;

    const post = await Post.create({
      userId: req.userId,
      title,
      description,
      tags,
      media,
      likesCount: 0,
      commentsCount: 0,
    });

    return res.status(201).json({
      success: true,
      message: "Post created successfully",
      data: post,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try{
    const posts = await Post.find().limit(20).sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      data: posts,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}

export const updatePost = async (
  req: Request & { userId?: string },
  res: Response
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { postId } = req.params;
    const { title, description, tags = [], media = [] } =
      req.body as CreatePostInput;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const updateData: Partial<CreatePostInput> = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description;
    if (tags !== undefined) updateData.tags = tags;
    if (media !== undefined) updateData.media = media;

    const updated = await Post.findByIdAndUpdate(postId, { $set: updateData }, { new: true });

    return res.status(200).json({
      success: true,
      message: "Post updated successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const editPost = async (
  req: Request & { userId?: string },
  res: Response
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { postId } = req.params;
    const updatePayload = req.body as EditPostInput;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const updateData: Partial<EditPostInput> = {};
    if (updatePayload.title !== undefined) updateData.title = updatePayload.title;
    if (updatePayload.description !== undefined) updateData.description = updatePayload.description;
    if (updatePayload.tags !== undefined) updateData.tags = updatePayload.tags;
    if (updatePayload.media !== undefined) updateData.media = updatePayload.media;

    const updated = await Post.findByIdAndUpdate(postId, { $set: updateData }, { new: true });

    return res.status(200).json({
      success: true,
      message: "Post edited successfully",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deletePost = async (
  req: Request & { userId?: string },
  res: Response
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { postId } = req.params;

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Forbidden" });
    }

    
    await ActionModel.deleteMany({ targetId: postId });

   
    await Post.findByIdAndDelete(postId);

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
