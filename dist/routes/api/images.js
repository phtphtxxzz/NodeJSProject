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
const imageResize_1 = require("./../../imageResize");
const express_1 = __importDefault(require("express"));
const images = express_1.default.Router();
images.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { width, height, filename } = req.query;
    if (isNaN(Number(width)) || isNaN(Number(height))) {
        res.status(400).send("width and height must be number");
    }
    const imgWidth = parseInt(width);
    const imgHeight = parseInt(height);
    const imgName = filename;
    try {
        const outputPath = yield (0, imageResize_1.ImageResize)(imgName, imgWidth, imgHeight);
        res.sendFile(outputPath);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send("Error happen");
        }
    }
}));
exports.default = images;
