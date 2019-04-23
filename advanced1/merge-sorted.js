// Write a function that takes two sorted arrays as arguments, and returns a new array
// that contains all the elements from both input arrays in sorted order.
//
// You may not provide any solution that requires you to sort the result array. You
// must build the result array one element at a time in the proper order.
//
// Your solution should not mutate the input arrays.

// input: two sorted arrays
// output: array with both arrays concatenated
// rules:
// - all the elements in the two sorted arrays are sorted into a new array
// - the orignal array is not mutated
// - you must build the result array one element at a time in proper order
// data structures/types: array, looping construct
// algorithm:
// create and initialize an empty array to store the result
// create a copy of the first array
// create a copy of the second array
// while the first array in not empty or the second array is not empty
//  - if the first array is empty, shift the first element from the second array and push to result
//  - if the second array is empty, shift the first element from the first array and push to result
//  - else if the first element on the first array is greater than the first element on the second,
//    - shift the first element from the first array and push to result
//  - else, shift the first element from the second array and push to result
// return result

const merge = (arr1, arr2) => {
  const arrCopy1 = Array.from(arr1);
  const arrCopy2 = Array.from(arr2);
  const mergedArr = [];

  while (arrCopy1.length > 0 || arrCopy2.length > 0) {
    if (arrCopy1.length === 0) {
      mergedArr.push(arrCopy2.shift());
    } else if (arrCopy2.length === 0) {
      mergedArr.push(arrCopy1.shift());
    } else if (arrCopy1[0] > arrCopy2[0]) {
      mergedArr.push(arrCopy2.shift());
    } else {
      mergedArr.push(arrCopy1.shift());
    }
  }

  return mergedArr;
};

// Examples:

console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])); // [1, 4, 5]
console.log(merge([1, 4, 5], [])); // [1, 4, 5]
