import upload from '../config/multer'
import { Router } from 'express';
import { getProfile, updateProfile, deleteProfile } from '../controllers/userController';
import { authMiddleware } from '../middleware/auth';
import {updateBio} from '../controllers/editbioController'
import {updateUsername} from '../controllers/editusernameController'
import { updateAvatar } from '../controllers/editavatarController';


const router = Router();

router.get('/me', authMiddleware, getProfile);
router.patch('/me', authMiddleware, updateProfile);
router.delete('/me', authMiddleware, deleteProfile);
router.post('/editusername', authMiddleware, updateUsername);
router.post('/editbio', updateBio);
router.post('/editavatar', authMiddleware,upload.single('avatar'), updateAvatar);

export default router;

