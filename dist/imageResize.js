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
exports.ImageResize = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const sharp_1 = __importDefault(require("sharp"));
const originImageDir = path_1.default.resolve(__dirname, "../assets/full");
const outputImageDir = path_1.default.resolve(__dirname, "../assets/thumb");
const ImageResize = (filename, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    const originImagePath = path_1.default.join(originImageDir, `${filename}.jpg`);
    const outputImagePath = path_1.default.join(outputImageDir, `${filename}_${width}x${height}.jpg`);
    console.log(originImagePath);
    if (!fs_1.default.existsSync(originImagePath)) {
        console.log("File not exist");
        return "";
    }
    if (fs_1.default.existsSync(outputImagePath)) {
        return outputImagePath;
    }
    yield (0, sharp_1.default)(originImagePath).resize(width, height).toFile(outputImagePath);
    return outputImagePath;
});
exports.ImageResize = ImageResize;
exports.default = exports.ImageResize;
