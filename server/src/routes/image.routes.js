import express from "express";
import { authenticateApiKey } from "../controllers/auth.controller.js";
import {
  uploadImage,
  getImageById,
  getUploadedImages,
} from "../controllers/image.controller.js";
const router = express.Router();

router.get("/", authenticateApiKey, getUploadedImages);
router.get("/:id", authenticateApiKey, getImageById);
router.post("/", authenticateApiKey, uploadImage);

export default router;
