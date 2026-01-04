import { Router } from 'express';
import { getProfile, updateProfile, deleteProfile } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';

const router = Router();

router.get('/me', authMiddleware, getProfile);
router.patch('/me', authMiddleware, updateProfile);
router.delete('/me', authMiddleware, deleteProfile);

export default router;

