"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const controller_1 = require("./controllers/controller");
const app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(body_parser_1.default.json());
// Route for calculating car value
app.post("/calculateCarValue", controller_1.calculateCarValueController);
// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
