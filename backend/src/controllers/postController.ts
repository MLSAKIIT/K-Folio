import { Request, Response } from "express";
import { Post } from "../models/post";
import User from "../models/user";
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
