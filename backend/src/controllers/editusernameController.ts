import UserModel from "../models/user";
import { Request, Response } from "express";

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
