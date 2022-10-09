import { Router } from "express";
import blogRoutes from "./blogs";
import userRoutes from "./users"

const router = Router();

router.use("/blogs", blogRoutes);
router.use("/user", userRoutes)

export default router;
