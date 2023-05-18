import { calculateCarValue } from "../services/model";



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

// test('calculateCarValue should return an error message for a missing year', () => {
//   // Arrange
//   const model = "Honda Civic";
//   const year = null;
//   const expectedValue = { error: "Model and year are required" };

//   // Act
//   const result = calculateCarValue(model, year);

//   // Assert
//   expect(result).toEqual(expectedValue);
// });


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


// Jono's tests

// test('Take in model (ignoring numbers) and * 100, then adding the year', () => {
//   // Arrange
//   const input1: string = "mustang45";
//   const input2: number = 1969;
//   const expected = { carValue: 11469 };
//   let theValue: { carValue: number }
//   // Act
//   expect(theValue).toStrictEqual(expected);
// })
