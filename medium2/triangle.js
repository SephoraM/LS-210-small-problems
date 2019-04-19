// A triangle is classified as follows:
//
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must be
// greater than the length of the longest side, and every side must have a length greater
// than 0. If either of these conditions is not satisfied, the triangle is invalid.
//
// Write a function that takes the lengths of the three sides of a triangle as arguments,
// and returns one of the following four strings representing the triangle's classification:
// 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// input: three numbers representing the sides of a triangle
// output: string describing the type of triangle or invalid if not of type
// questions:
// - should I account for any non-number values being given as arguments?
// - should I account for missing arguments?
// - negative values?
// rules:
// - valid if:
//   - the sum of the length of the two shortest sides must be greater than the longest side
//   - none of the sides are zero
// - Triangle types:
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// data structures: array
// algorithm:
// isValidTriangle:
// - sort the given inputs into an array by smallest to largest
// - is the first and second values summed greater than the last, and
// - the first element is not zero
// - return true, else false
// isEquilateral:
// arg1 === arg2 and arg2 === arg3
// isScalene:
// arg1 !== arg2 and arg2 !== arg3 and arg1 !== arg3
// isIsosceles:
// arg1 === arg2 or arg2 === arg3 or arg1 === arg3
//   and arg1 !== arg2 or arg2 !== arg3 or arg1 !== arg3
// if invalid return 'invalid'
// else return the type of triangle name
const isValidTriangle = (...sides) => {
  const sortedSides = sides.sort((a, b) => a > b);

  return sortedSides[0] && sortedSides[0] + sortedSides[1] > sortedSides[2];
};

const triangle = (side1, side2, side3) => {
  if (!isValidTriangle(side1, side2, side3)) return 'invalid';
  if (side1 === side2 && side2 === side3) return 'equilateral';
  if (side1 !== side2 && side2 !== side3 && side1 !== side3) return 'scalene';
  return 'isosceles';
};

// Examples:

console.log(triangle(3, 14, 15)); // "scalene"
console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
