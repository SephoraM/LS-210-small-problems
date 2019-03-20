/* Write a function that takes one argument, a positive integer, and returns a
list of the digits in the number. */
// number => array
// a positive integer => array of all the digits in the given number
// coerce number to string
// split up string into array of chars
// transform each string element into a number
// return transformed array
function digitList(integer) {
  return String(integer)
    .split('')
    .map(digit => parseInt(digit, 10));
}

// Examples:

digitList(12345); // [1, 2, 3, 4, 5]
digitList(7); // [7]
digitList(375290); // [3, 7, 5, 2, 9, 0]
digitList(444); // [4, 4, 4]
