// Write a function that computes the difference between the square of the sum of
// the first n positive integers and the sum of the squares of the first n positive
// integers.

// input: positive integer
// output: integer value which is the difference
// rules:
// - calculate the sum of 1 to n and then get the square
// - calculate the square of 1 to n and then sum
// - return the first calculation minus the second calculation
// data structures: Math, number, array
//  Array(n).fill(0).map((_, idx) => idx + 1)
// create an array with the range of numbers from 1 to n
// sumSquare:
//  - reduce the array to the sum of its values and then square the result
// squareSum:
//  - reduce the array to the sum of its values which are first squared
// return sum-square - square-sum
const sumSquareDifference = (num) => {
  const range = Array(num)
    .fill(0)
    .map((_, idx) => idx + 1);
  const sumSquare = range.reduce((acc, cur) => acc + cur, 0) ** 2;
  const squareSum = range.reduce((acc, cur) => acc + cur ** 2, 0);

  return sumSquare - squareSum;
};

// Examples:

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
