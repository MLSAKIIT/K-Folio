import cloudinary from '../config/cloudinary'
import UserModel from '../models/user';
import { Request, Response } from 'express';

import fs from 'fs'
export const updateAvatar = async (req: Request & { userId?: string }, res: Response) => {
  try {
    if (!req.file) {
  return res.status(400).json({
    success: false,
    message: "Avatar file is required",
  });
}

    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const user = await UserModel.findOne({ _id:userId});
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const uploadResult = await cloudinary.uploader.upload(req.file.path,{
      folder:"avatars",
      resource_type:"image"
    })
    if(!uploadResult){
      return res.status(500).json({
        success: false,
        message: "Failed to upload avatar",
      });
    }
    user.avatarUrl = uploadResult.secure_url
    await user.save()
   fs.unlink(req.file.path, (err) => {
  if (err) console.error("Failed to delete temp file:", err);
});

    return res.status(200).json({
      success:true,
      message:"Avatar updated successfully",
      avatar_url:uploadResult.secure_url
    })
  
  } catch (error: any) {
    console.log("Error in editavatar route:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export const updateBio = async (req: Request & { userId?: string }, res: Response) => {
  try {
    if (!req.file) {
  return res.status(400).json({
    success: false,
    message: "Avatar file is required",
  });
}

    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const user = await UserModel.findOne({ _id:userId});
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    const newbio = req.body.Bio
    user.bio = newbio
    await user.save()

    return res.status(200).json({
      success:true,
      message:"Bio updated successfully",
    })
  
  } catch (error: any) {
    console.log("Error in editbio route:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export const updateUsername = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const { username } = req.body;

    if (!username || username.trim().length < 3) {
      return res.status(400).json({
        success: false,
        message: "Username must be at least 3 characters long",
      });
    }

    // check if username already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username already taken",
      });
    }

    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.username = username;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Username updated successfully",
    });

  } catch (error) {
    console.error("Error in editUsername:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
