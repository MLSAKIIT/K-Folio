import { Router } from "express";
import { createPost, updatePost } from "../controllers/postController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// CREATE POST
router.post("/create", authMiddleware, createPost);

// UPDATE POST
router.put("/update/:postId", authMiddleware, updatePost);

export default router;
