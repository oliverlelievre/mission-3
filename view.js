"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderError = exports.renderCarValue = void 0;
function renderCarValue(res, value) {
    res.json({ car_value: value });
}
exports.renderCarValue = renderCarValue;
function renderError(res, error) {
    res.status(400).json({ error: error.message });
}
exports.renderError = renderError;
