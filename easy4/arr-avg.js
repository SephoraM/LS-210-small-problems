/* Write a function that takes one argument, an array containing integers, and
 returns the average of all the integers in the array, rounded down to the
 integer component of the average. The array will never be empty, and the
 numbers will always be positive integers. */

// array => number
// array of integers => average of the integers, round down.
// array will never be empty
// numbers will always be positive integers

// average - sum up the intgers in the array, divide by the number of integers
// floor the average and return
function average(integers) {
  return Math.floor(integers.reduce((acc, val) => acc + val, 0) / integers.length);
}

// Examples:

average([1, 5, 87, 45, 8, 8]); // 25
average([9, 47, 23, 95, 16, 52]); // 40
