import express from 'express';
import { loginControllers, registerControllers, setAvatarController } from '../controllers/userController.js';

const router = express.Router();

router.post("/register", registerControllers);  // ✅ fixed
router.post("/login", loginControllers);       // simplified
router.post("/setAvatar/:id", setAvatarController);

export default router;
