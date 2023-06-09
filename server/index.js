import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connection from "./src/models/connection.js";
import multer from "multer";
import userRoutes from "./src/routes/user.routes.js";
import imageRoutes from "./src/routes/image.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 1337;
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/photos", express.static("uploads"));
app.use("/thumbnails", express.static("src/thumbnails"));

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

connection;

app.use("/auth", userRoutes);
app.use("/image", upload.single("image"), imageRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});