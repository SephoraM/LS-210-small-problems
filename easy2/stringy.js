/* Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
the string should match the given integer. */

// number => string
// return a string the length of the given number consisting of alternating 1's and 0's
// string starts with 1

function stringy(number) {
  let binaryString = '';
  let binaryDigit = 1;

  for (let i = 0; i < number; i += 1) {
    binaryString += String(binaryDigit);

    binaryDigit = binaryDigit ? 0 : 1;
  }

  return binaryString;
}

// Examples:

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
