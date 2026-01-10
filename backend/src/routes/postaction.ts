import { Router } from "express";
import { createPost, updatePost, editPost, deletePost } from "../controllers/postController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

// CREATE POST
router.post("/create", authMiddleware, createPost);

// UPDATE POST
router.put("/update/:postId", authMiddleware, updatePost);

// EDIT POST
router.patch("/edit/:postId", authMiddleware, editPost);

// DELETE POST
router.delete("/delete/:postId", authMiddleware, deletePost);

export default router;