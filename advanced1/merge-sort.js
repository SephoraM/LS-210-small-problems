// Merge sort is a recursive sorting algorithm that works by breaking down an array's
// elements into nested subarrays, then combining those nested subarrays back together
// in sorted order. It is best explained with an example. Given the array [9, 5, 7, 1],
// let's walk through the process of sorting it with merge sort. We'll start off by breaking
// the array down into nested subarrays:
//
// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]
// We then work our way back to a flat array by merging each pair of nested subarrays back
// together in the proper order:
//
// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]
// Write a function that takes an array, and returns a new array that contains the values
// from the input array in sorted order. The function should sort the array using the merge
// sort algorithm as described above. You may assume that every element of the array will be
// of the same data type—either all numbers or all strings.
//
// Feel free to use the merge function you wrote in the previous exercise.

// input: array
// output: array sorted using merge sort algorithm
// rules:
// - recursive function
//   - breaking condition
//   - calls itself
// - break the given array into subarray pairs until only one element exists in each array
// - merge sort the subarray pairs going from the inner arrays out
// data structure: array
// algorithm:
// if the length of the array is less than or equal to 1 return array.slice()
// array 1 is assigned the value of recursively calling mergeSort with the first half of the array
// array 2 is assigned the value of recursively calling mergeSort with the second half of the array
// return merge on the two arrays

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

// if the length of the array is less than or equal to 1 return array.slice()
// array 1 is assigned the value of recursively calling mergeSort with the first half of the array
// array 2 is assigned the value of recursively calling mergeSort with the second half of the array
// return merge on the two arrays
const mergeSort = (array) => {
  if (array.length <= 1) return array;

  const arr1 = mergeSort(array.slice(0, Math.ceil(array.length / 2)));
  const arr2 = mergeSort(array.slice(Math.ceil(array.length / 2)));

  return merge(arr1, arr2);
};

// Examples:

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]
console.log(mergeSort([5, 3])); // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
