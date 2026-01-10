import { Request, Response } from 'express';
import User from '../models/user';

export const getProfile = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const update: Partial<{ bio: string; avatarUrl: string }>
      = { ...req.body };
    const user = await User.findByIdAndUpdate(
      req.userId,
      update,
      { new: true }
    ).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const deleteProfile = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { isDeleted: true },
      { new: true }
    );
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json({ message: 'User soft deleted successfully' });
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const blockUser = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const { userId: targetUserId } = req.params;
    if (req.userId === targetUserId) {
      return res.status(400).json({ message: 'Cannot block yourself' });
    }
    const user = await User.findById(req.userId);
    const targetUser = await User.findById(targetUserId);
    if (!user || !targetUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    if (user.blockedUsers.includes(targetUserId)) {
      return res.status(400).json({ message: 'User already blocked' });
    }
    user.blockedUsers.push(targetUserId);
    await user.save();
    return res.json({ message: 'User blocked successfully' });
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const unblockUser = async (req: Request & { userId?: string }, res: Response) => {
  try {
    const { userId: targetUserId } = req.params;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const index = user.blockedUsers.indexOf(targetUserId);
    if (index === -1) {
      return res.status(400).json({ message: 'User not blocked' });
    }
    user.blockedUsers.splice(index, 1);
    await user.save();
    return res.json({ message: 'User unblocked successfully' });
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};