import { Router } from "express";
import { getPosts, postPost } from "../middleware/req.middleware.js";
const router = Router();

router.get("/posts", getPosts);

router.post("/posts", postPost);

// router.put("/posts/like/:id", likePost);

// router.delete("/posts/:id", (req, res) => console.log("DELETE posts"));

export default router;
