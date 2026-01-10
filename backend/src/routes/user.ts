import upload from '../config/multer'
import { Router } from 'express';
// import { getProfile, updateProfile, deleteProfile } from '../controllers/userController';
import { getProfile, updateProfile, deleteProfile, blockUser, unblockUser } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';
import { updateBio } from '../controllers/editprofileController'
import {updateUsername} from '../controllers/editprofileController'
import { updateAvatar } from '../controllers/editprofileController';


const router = Router();

router.get('/me', authMiddleware, getProfile);
router.patch('/me', authMiddleware, updateProfile);
router.delete('/me', authMiddleware, deleteProfile);
router.post('/editusername', authMiddleware, updateUsername);
router.post('/editbio', updateBio);
router.post('/editavatar', authMiddleware,upload.single('avatar'), updateAvatar);
router.post('/block/:userId', authMiddleware, blockUser);
router.post('/unblock/:userId', authMiddleware, unblockUser);

export default router;

