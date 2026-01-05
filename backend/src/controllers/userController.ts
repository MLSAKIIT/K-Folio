import { Request, Response } from 'express';
import User from '../models/user';
import { AuthRequest } from '../middleware/auth';

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.json(user);
  } catch {
    return res.status(500).json({ message: 'Server error' });
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
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

export const deleteProfile = async (req: AuthRequest, res: Response) => {
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
