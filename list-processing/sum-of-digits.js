/**
 * Write a function that takes one argument, a positive integer, and returns the
 * sum of its digits. Do this using list processing techniques.
 */

// number => number
// number => number which is the sum of the digits of the given number
// 1. number needs to be converted to its string representation and then split into chars
// 2. the array of chars which represent each digit need to each be converted to number
// 3. each number in the array of numbers needs to be summed up to reduce to total number value
const sum = num => String(num)
  .split('')
  .reduce((acc, digit) => acc + Number(digit), 0);

// Examples:

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
