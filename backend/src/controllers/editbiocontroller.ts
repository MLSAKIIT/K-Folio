import UserModel from '../models/user';
import { Request, Response } from 'express';
export const updatebio = async (req: Request & { userId?: string}, res: Response) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const user = await UserModel.findOne({ _id:userId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const newbio = req.body.bio;
    user.bio = newbio;
    await user.save();

    res.json({
      success: true,
      message: "Bio updated successfully",
      user,
    });

  } catch (error: any) {
    console.log("Error in editprofile route:", error);

    // Handle Mongoose validation error
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: messages,
      });
    }

    // Other errors
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}