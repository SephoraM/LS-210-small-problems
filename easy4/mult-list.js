/* Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array that contains the product of each pair of
numbers from the arguments that have the same index. You may assume that the
arguments contain the same number of elements. */

// array, array => array
// array of numbers, array of numbers => array composed of the product
// of the two given array's corresponding elements. i.e., same index
// - the arguments contain the same number of elements
// iterate over one array
// - get the product of each element and the second array's element of same index
// - put product in new array
// return new array
function multiplyList(array1, array2) {
  return array1.map((elem, idx) => elem * array2[idx]);
}

// Example:

multiplyList([3, 5, 7], [9, 10, 11]); // [27, 50, 77]
