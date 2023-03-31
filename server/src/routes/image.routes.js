import express from "express";
import {
  uploadImage,
  getImageById,
  getUploadedImages,
} from "../controllers/image.controller.js";
const router = express.Router();

router.get("/", getUploadedImages);
router.get("/:id", getImageById);
router.post("/upload", uploadImage);

export default router;
