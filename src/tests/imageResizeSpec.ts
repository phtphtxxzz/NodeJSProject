import { promises as fs } from "fs";
import ImageResize from "./../imageResize";

describe("Resize Image", () => {
  it("check if image exist", async () => {
    const checkExist = await ImageResize.CheckImageExist("brazil");

    expect(checkExist).toBeTrue();
  });
  it("should resize image and create true link", async () => {
    const outputPath = await ImageResize.ResizeImage("brazil", 50, 50);
    let checkImage = false;
    try {
      await fs.access(outputPath);
      checkImage = true;
    } catch {}

    expect(checkImage).toBeTrue();
  });
});
