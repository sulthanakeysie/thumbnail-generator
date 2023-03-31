import ImageSchema from "../models/image.model.js";
import sharp from "sharp";
import path from "path";

export const uploadImage = async (req, res) => {
  const imagePath = req.file.path;
  const publicPath = "src/public/";

  const sizes = [100, 200, 300];
  const promises = sizes.map((size) => {
    const filename = path.basename(imagePath);
    const thumbnailPath = publicPath + size + "-" + filename;
    return sharp(imagePath)
      .resize(size)
      .toFile(thumbnailPath)
      .then(() => {
        return { size, path: thumbnailPath };
      });
  });

  Promise.all(promises)
    .then((thumbnails) => {
      const image = new ImageSchema({
        originalImage: imagePath,
        thumbnails: thumbnails,
      });
      return image.save();
    })
    .then((savedImage) => {
      res.status(200).send(savedImage);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error generating thumbnails");
    });
};

export const getUploadedImages = async (req, res) => {
  try {
    const images = await ImageSchema.find();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).send("Error retrieving images");
  }
};

export const getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).send("Image not found");
    }
    res.status(200).json(image);
  } catch (err) {
    res.status(500).send("Error retrieving image");
  }
};
