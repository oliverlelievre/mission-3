import { calculateCarValue } from "../services/model";
import { CarValueResult } from "../types/carValue";

test('calculateCarValue should return an error message for a missing model', () => {
  // Arrange
  const model = "";
  const year = 2020;
  const expectedValue = { error: "Model and year are required" };

  // Act
  const result = calculateCarValue(model, year);

  // Assert
  expect(result).toEqual(expectedValue);
});


test('calculateCarValue should return an error message for invalid characters in the model', () => {
  // Arrange
  const model = "Toyota C@mry!";
  const year = 2020;
  const expectedValue = { error: "Invalid characters in the model" };

  // Act
  const result = calculateCarValue(model, year);

  // Assert
  expect(result).toEqual(expectedValue);
});


describe("calculateCarValue", () => {
  test("should return the correct car value for valid inputs", () => {
    // Arrange
    const model = "Honda Civic";
    const year = 2020;
    const expectedValue: CarValueResult = { carValue: 3770 };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(expectedValue);
  });

  test("should return an error message for a missing model", () => {
    // Arrange
    const model = "";
    const year = 2020;
    const expectedValue: CarValueResult = { error: "Model and year are required" };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(expectedValue);
  });

  // test("should return an error message for a missing year", () => {
  //   // Arrange
  //   const model = "Honda Civic";
  //   const year = null;
  //   const expectedValue: CarValueResult = { error: "Model and year are required" };

  //   // Act
  //   const result = calculateCarValue(model, year);

  //   // Assert
  //   expect(result).toEqual(expectedValue);
  // });

  test("should return an error message for invalid characters in the model", () => {
    // Arrange
    const model = "Toyota Camry!";
    const year = 2020;
    const expectedValue: CarValueResult = { error: "Invalid characters in the model" };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(expectedValue);
  });

  test("should return the correct car value for a model with numbers", () => {
    // Arrange
    const model = "Nissan Altima";
    const year = 2020;
    const expectedValue: CarValueResult = { carValue: 3960 };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(expectedValue);
  });
});
