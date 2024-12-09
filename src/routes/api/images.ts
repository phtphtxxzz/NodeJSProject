import ImageResize from "./../../imageResize";
import express from "express";

const images = express.Router();

images.get("/", async (req, res) => {
  const { width, height, filename } = req.query;
  const imgWidth = parseInt(width as string);
  const imgHeight = parseInt(height as string);
  const imgName = filename as string;

  try {
    if ((await ImageResize.CheckImageExist(imgName)) == false) {
      res.status(400).send("Image doesn't exist");
    }
    const outputPath = await ImageResize.ResizeImage(
      imgName,
      imgWidth,
      imgHeight
    );
    console.log(outputPath);
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
