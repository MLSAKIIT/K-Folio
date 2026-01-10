import { Router } from "express";
import { createPost, updatePost, editPost, deletePost } from "../controllers/postController";
import { authMiddleware } from "../middleware/auth";
import { handleLike,handleComment } from "../controllers/actionController";

const router = Router();

// CREATE POST
router.post("/create", authMiddleware, createPost);

// UPDATE POST
router.put("/update/:postId", authMiddleware, updatePost);

router.post('/:postId/like',authMiddleware,handleLike);
router.post('/:postId/comment',authMiddleware,handleComment)
export default router;
