/* Write a function that takes an array of numbers, and returns an array with
the same number of elements, with each element's value being the running total
from the original array. */

// array => array
// function runningTotal(arr) {
//   const running = [];
//
//   arr.forEach((val) => {
//     running.push(running[running.length - 1] + val || val);
//   });
//   return running;
// }

// with map:

function runningTotal(arr) {
  let sum = 0;
  return arr.map((val) => {
    sum += val;
    return sum;
  });
}
// Problems suited for `map` are problems which require the same number of elements
// returned in a new array with each element transformed by the logic within the
// callback function.
// Examples:

runningTotal([2, 5, 13]); // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]); // [14, 25, 32, 47, 67]
runningTotal([3]); // [3]
runningTotal([]); // []
