"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = void 0;
const validateQuery = (req, res, next) => {
    const { width, height, filename } = req.query;
    if (!width || !height || !filename) {
        return res.status(400).send("Query is not valid");
    }
    if (isNaN(Number(width)) || isNaN(Number(height))) {
        return res.status(400).send("Width and Height must be number");
    }
    if (Number(width) <= 0 || Number(height) <= 0) {
        return res.status(400).send("Width and Height must be larger than 0");
    }
    next();
};
exports.validateQuery = validateQuery;
exports.default = exports.validateQuery;
