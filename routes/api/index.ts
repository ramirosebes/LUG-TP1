import { Router } from "express";
import blogRoutes from "./blog";
import userRoutes from "./user"

const router = Router();

router.use("/blogs", blogRoutes)
router.use("/user", userRoutes)

export default router;
