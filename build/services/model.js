"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCarValue = void 0;
function calculateCarValue(model, year) {
    const cleanedModel = model.replace(/ /g, "").toUpperCase();
    const value = Array.from(cleanedModel).reduce((acc, char) => {
        const position = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
        return acc + position;
    }, 0) * 100 + year;
    return value;
}
exports.calculateCarValue = calculateCarValue;
