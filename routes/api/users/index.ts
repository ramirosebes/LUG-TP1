import { Router } from "express";
import userController from "../../../controllers/User/User";

const router = Router();

router.post("/", userController.add);
router.get("/", userController.get);

export default router;