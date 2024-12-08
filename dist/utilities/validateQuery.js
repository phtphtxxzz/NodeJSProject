"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateQuery = void 0;
const validateQuery = (req, res, next) => {
    const { width, height, filename } = req.query;
    if (!width || !height || !filename) {
        return res.status(400).send("Query is not valid");
    }
    next();
};
exports.validateQuery = validateQuery;
exports.default = exports.validateQuery;
