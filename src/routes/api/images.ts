import { ImageResize } from "./../../imageResize";
import express from "express";

const images = express.Router();

images.get("/", async (req, res) => {
  const { width, height, filename } = req.query;
  if (isNaN(Number(width)) || isNaN(Number(height))) {
    res.status(400).send("width and height must be number");
  }
  const imgWidth = parseInt(width as string);
  const imgHeight = parseInt(height as string);
  const imgName = filename as string;

  try {
    const outputPath = await ImageResize(imgName, imgWidth, imgHeight);
    res.sendFile(outputPath);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    } else {
      res.status(500).send("Error happen");
    }
  }
});

export default images;
