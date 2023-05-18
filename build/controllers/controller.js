"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValueController = void 0;
const model_1 = require("../services/model");
const view_1 = require("../view");
function calculateCarValueController(req, res) {
    try {
        const { model, year } = req.body;
        const value = (0, model_1.calculateCarValue)(model, year);
        (0, view_1.renderCarValue)(res, value);
    }
    catch (error) {
        (0, view_1.renderError)(res, error);
    }
}
exports.calculateCarValueController = calculateCarValueController;
