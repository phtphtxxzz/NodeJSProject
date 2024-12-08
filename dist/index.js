"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const logger_1 = __importDefault(require("./utilities/logger"));
const validateQuery_1 = __importDefault(require("./utilities/validateQuery"));
const app = (0, express_1.default)();
const port = 3000;
const middleware = [logger_1.default, validateQuery_1.default];
app.use(middleware);
app.use("/api", index_1.default);
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
