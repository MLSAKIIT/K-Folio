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