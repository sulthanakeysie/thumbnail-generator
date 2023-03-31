import mongoose from "mongoose";
import { config } from "../config/database.config.js";

mongoose
  .connect(config.uri)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.error(`error connecting to database: ${err}`);
  });

export default mongoose.connection;
