import { CarValueResult } from "../types/carValue";

export const calculateCarValue = (
  model: string,
  year: number
): CarValueResult => {
  if (!model || !year) {
    return { error: "Model and year are required" };
  }

  const hasSpecialCharacter = /[^a-zA-Z0-9 ]/.test(model);
  if (hasSpecialCharacter) {
    return { error: "Invalid characters in the model" };
  }

  const cleanedModel = model.replace(/ /g, "").toUpperCase();
  const modelValue = Array.from(cleanedModel).reduce((acc, char) => {
    const position = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
    return acc + position;
  }, 0) * 100;

  const carValue = modelValue + year;

  return { carValue };
};



// export { CarValueResult };