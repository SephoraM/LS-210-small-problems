/* Write a function that takes an array of integers as input, multiplies all of
the integers together, divides the result by the number of entries in the array,
and returns the result as a string with the value rounded to three decimal
places. */

// array => string
// array of integers => string which represents:
//  - product of all integers divided by the number of integers in array
//  - return as string with value rounded to three decimals
function showMultiplicativeAverage(arr) {
  const avg = arr.reduce((total, value) => total * value, 1) / arr.length;
  return avg.toFixed(3);
}

// Examples:

showMultiplicativeAverage([3, 5]); // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
