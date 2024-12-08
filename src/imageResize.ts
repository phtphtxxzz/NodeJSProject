import path from "path";
import fs from "fs";
import sharp from "sharp";

const originImageDir = path.resolve(__dirname, "../assets/full");
const outputImageDir = path.resolve(__dirname, "../assets/thumb");

export const ImageResize = async (
  filename: string,
  width: number,
  height: number
): Promise<string> => {
  const originImagePath = path.join(originImageDir, `${filename}.jpg`);
  const outputImagePath = path.join(
    outputImageDir,
    `${filename}_${width}x${height}.jpg`
  );
  console.log(originImagePath);
  if (!fs.existsSync(originImagePath)) {
    console.log("File not exist");
    return "";
  }

  if (fs.existsSync(outputImagePath)) {
    return outputImagePath;
  }

  await sharp(originImagePath).resize(width, height).toFile(outputImagePath);

  return outputImagePath;
};
export default ImageResize;
