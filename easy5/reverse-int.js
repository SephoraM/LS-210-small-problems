/* Write a function that takes a positive integer as an argument, and returns
that number with its digits reversed. */

// number => number
// positive integer => the given integer with it's digits reversed
// data structures: string, array
// coerce the given integer to a string, and then split the sting into chars
// reverse the array direction, join into a string, convert back to integer
function reverseNumber(integer) {
  return parseInt(
    String(integer)
      .split('')
      .reverse()
      .join(''),
    10,
  );
}

// Examples:

reverseNumber(12345); // 54321
reverseNumber(12213); // 31221
reverseNumber(456); // 654
reverseNumber(12000); // 21 -- Note that zeros get dropped!
reverseNumber(1); // 1
