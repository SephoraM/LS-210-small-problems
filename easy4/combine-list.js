/* Write a function that combines two arrays passed as arguments, and returns a
new array that contains all elements from both array arguments, with each element
taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same
number of elements. */

// array, array => array
// Data Structures - array
//
// return new array which contains both given arrays - alternate each element
// both input arrays are non-empty,
// they have the same number of elements.
//
// iterate over the first array, for each element that gets pushed to the
// new array, push the element at the same index in the second array to the next
// position in the new array
// return new array
function interleave(array1, array2) {
  const combined = [];

  array1.forEach((elem, idx) => {
    combined.push(elem, array2[idx]);
  });

  return combined;
}

// Example:

interleave([1, 2, 3], ['a', 'b', 'c']); // [1, "a", 2, "b", 3, "c"]
