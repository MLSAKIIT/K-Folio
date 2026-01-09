import { Router } from "express";
import { createPost } from "../controllers/postController";
import { authMiddleware } from "../middleware/auth";
import { createPostSchema } from "../validators/postSchema";

const router = Router();
router.post("/", authMiddleware, createPost);
router.post("/like",authMiddleware,)
export default router;
