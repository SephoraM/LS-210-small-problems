/**
 * Write a function that takes two array arguments, each containing a list of
 * numbers, and returns a new array containing the products of all combinations
 * of number pairs that exist between the two arrays. The returned array should
 * be sorted in ascending numerical order.
 *
 * You may assume that neither argument will be an empty array.
 */
// array, array => array
// array of numbers, array of numbers => array of the products of all combinations of number pairs
// between the given arrays
// iterate over the first array
// multiply every element with all elements in the second array one at a time
// put all products in one array
// sort the array in ascending order
const compareNumbers = (num1, num2) => num1 - num2;

const produceMultiples = (number, array) => array.map(elem => elem * number);

const multiplyAllPairs = (numbers1, numbers2) => numbers1
  .reduce((arr, number) => {
    arr.push(...produceMultiples(number, numbers2));
    return arr;
  }, [])
  .sort(compareNumbers);

// Example:
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
