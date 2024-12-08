import { promises as fs } from "fs";
import path from "path";
import ImageResize from "./../imageResize";

describe("Resize Image", () => {
  it("should resize image and create true link", async () => {
    const outputPath = await ImageResize("argentina", 50, 50);
    let checkImage = false;
    try {
      await fs.access(outputPath);
      checkImage = true;
    } catch {}

    expect(checkImage).not.toBeFalse();
  });
});
