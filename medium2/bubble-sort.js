// 'Bubble Sort' is one of the simplest sorting algorithms available. Although it is
// not an efficient algorithm, it is an excellent exercise for student developers. In
// this exercise, you will write a function that sorts an array using the bubble sort
// algorithm.
//
// A bubble sort works by making multiple passes (iterations) through an array. On each
// pass, the two values of each pair of consecutive elements are compared. If the first
// value is greater than the second, the two elements are swapped. This process is repeated
// until a complete pass is made without performing any swaps — at which point the array is
// completely sorted.
//
// 6 2 7 1 4 Start: compare 6 > 2? Yes
// 2 6 7 1 4 Swap
// 2 6 7 1 4 6 > 7? No (no swap)
// 2 6 7 1 4 7 > 1? Yes
// 2 6 1 7 4 Swap
// 2 6 1 7 4 7 > 4? Yes
// 2 6 1 4 7 Swap
// 2 6 1 4 7 2 > 6? No
// 2 6 1 4 7 6 > 1? Yes
// 2 1 6 4 7 Swap
// 2 1 6 4 7 6 > 4? Yes
// 2 1 4 6 7 Swap
// 2 1 4 6 7 6 > 7? No
// 2 1 4 6 7 2 > 1? Yes
// 1 2 4 6 7 Swap
// 1 2 4 6 7 2 > 4? No
// 1 2 4 6 7 4 > 6? No
// 1 2 4 6 7 6 > 7? No
// 1 2 4 6 7 1 > 2? No
// 1 2 4 6 7 2 > 4? No
// 1 2 4 6 7 4 > 6? No
// 1 2 4 6 7 6 > 7? No
// 1 2 4 6 7 No swaps; all done; sorted
// We can stop iterating the first time we make a pass through the array without making
// any swaps because this means that the entire array is sorted.
//
// For further information — including pseudo-code that demonstrates the algorithm, as
// well as a minor optimization technique — see the Bubble Sort Wikipedia page.
//
// Write a function that takes an array as an argument and sorts that array using the
// bubble sort algorithm described above. The sorting should be done "in-place" — that is,
// the function should mutate the array. You may assume that the array contains at least
// two elements.

// input: array with at least two elements
// output: same array with all elements sorted using bubble sort algorithm
// questions:
// - should i assume that only primitive values, i.e., strings, numbers will be present in array?
// - if other elements are present, would you like an error message? or a comparison based on ...?
// - Will all the elements in the given array be of the same type?
// - I noted that the array will contain at least two elements, so I assume I do not need to account
//   for less?
// - should I account any other data type being given as an argument in error?
// - should the function return the sorted array?
// rules:
// - make multiple passes over the array
// - compare each pair of consecutive elements
//  - if the first element is greater than the second element, swap the placement
// - when a full pass over the array results in no swaps, the sort is complete
// - when a pass is complete, the last element of that pass is in its correct place
// - this means that for each iteration, the length of the iteration is reduced by one
// - this sort alters the original array and returns it
// - data structures/types: array, looping construct, boolean
// algorithm:
// swap count is length of the array minus 1
// made a swap is true
// while made a swap is true
// - made a swap is false
// - iterate over the array up to swap count
//  - compare the element at the current index to the element at the next index
//    if current is greater than next:
//      - swap elements
//      - made a swap is true
//  - decrement swap count by one
// - return undefined

const bubbleSort = (array) => {
  let swapLength = array.length - 1;
  let isSwapped = true;

  while (isSwapped) {
    isSwapped = false;

    for (let i = 0; i < swapLength; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSwapped = true;
      }
    }
    swapLength -= 1;
  }
};

// Examples:

var array = [5, 3];
bubbleSort(array);
console.log(array); // [3, 5]

var array = [6, 2, 7, 1, 4];
bubbleSort(array);
console.log(array); // [1, 2, 4, 6, 7]

var array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array);
console.log(array); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
