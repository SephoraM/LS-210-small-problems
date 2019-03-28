/**
 * Write a function that takes an array of numbers, and returns the sum of the
 * sums of each leading subsequence for that array. You may assume that the array
 * always contains at least one number.
 */

// array => number
// array of numbers => number which is the sum of the sums of each leading subsequence
// 1. iterate over the array take the number from the first element for one + index times of
// elements and sum them
// 2. reduce the results by summing those sums
const sum = numbers => numbers.reduce((total, value) => total + value, 0);
const sumOfSums = nums => nums.reduce((acc, _, idx, arr) => acc + sum(arr.slice(0, idx + 1)), 0);

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
