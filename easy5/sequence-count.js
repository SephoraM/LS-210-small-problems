/* Create a function that takes two integers as arguments. The first argument is
a count, and the second is the starting number of a sequence that your function
will create. The function should return an array containing the same number of
elements as the count argument. The value of each element should be a multiple
of the starting number.

You may assume that the count argument will always be an integer greater than or
equal to 0. The starting number can be any integer. If the count is 0, the
function should return an empty array. */

// number, number => array
// number which is the total elements in the array to be returned,
// number which is the starting number of the sequence that will be returned
// => array which is a sequence of the multiples of the starting number
// data structures: array, number
// iterate from 1 to first given number (inclusive)
// upon each iteration, multiply the second given number by the iterator
// each value is placed in an array which is returned by the function
function sequence(count, start) {
  return new Array(count).fill(start).map((val, idx) => val * (idx + 1));
}

// Examples:

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []
