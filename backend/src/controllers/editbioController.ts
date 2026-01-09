
import UserModel from '../models/user';
import { Request, Response } from 'express';
import cloudinary from '../config/cloudinary'
import fs from 'fs'
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