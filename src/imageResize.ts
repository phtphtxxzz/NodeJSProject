import path from "path";
import fs from "fs";
import sharp from "sharp";

const originImageDir = path.resolve(__dirname, "../assets/full");
const outputImageDir = path.resolve(__dirname, "../assets/thumb");

export default class ImageResize {
  static CheckImageExist = async (filename: string): Promise<boolean> => {
    const originImagePath = path.join(originImageDir, `${filename}.jpg`);
    console.log(originImagePath);

    if (fs.existsSync(originImagePath)) {
      return true;
    }

    return false;
  };

  static ResizeImage = async (
    filename: string,
    width: number,
    height: number
  ): Promise<string> => {
    const originImagePath = path.join(originImageDir, `${filename}.jpg`);
    const outputImagePath = path.join(
      outputImageDir,
      `${filename}_${width}x${height}.jpg`
    );

    if (fs.existsSync(outputImagePath)) {
      return outputImagePath;
    }

    await sharp(originImagePath).resize(width, height).toFile(outputImagePath);

    return outputImagePath;
  };
}
