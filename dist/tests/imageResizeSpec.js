"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const imageResize_1 = __importDefault(require("./../imageResize"));
describe("Resize Image", () => {
    it("should resize image and create true link", () => __awaiter(void 0, void 0, void 0, function* () {
        const outputPath = yield (0, imageResize_1.default)("argentisna", 50, 50);
        let checkImage = false;
        try {
            yield fs_1.promises.access(outputPath);
            checkImage = true;
        }
        catch (_a) { }
        expect(checkImage).not.toBeFalse();
    }));
});
