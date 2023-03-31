import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  originalImage: { type: String, required: true },
  thumbnails: [
    {
      size: { type: Number, required: true },
      path: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const ImageSchema = mongoose.model("image", imageSchema);

export default ImageSchema;
