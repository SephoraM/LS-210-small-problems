/* Write a function that takes an integer argument, and returns an array
containing all integers between 1 and the argument (inclusive), in ascending
order.

You may assume that the argument will always be a positive integer. */

// number => array
// a positive integer => array of integers from one counting up to given integer (inclusive)
function sequence(integer) {
  return new Array(integer).fill(null).map((_, idx) => idx + 1);
}

// Examples:

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
