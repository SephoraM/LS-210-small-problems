/**
 * Write a function that returns a list of all substrings of a string. Order the
 * returned list by where in the string the substring begins. This means that all
 * substrings that start at position 0 should come first, then all substrings that
 * start at position 1, and so on. Since multiple substrings will occur at each
 * position, return the substrings at a given position from shortest to longest.
 *
 * You may (and should) use the substringsAtStart function you wrote in the previous exercise:
 */
const substringsAtStart = string => [...string].map((_, idx) => string.slice(0, idx + 1));

// string => array of all substrings of the given string
// 1. iterate length of given string times.
// 2. on each iteration perform the substringsAtStart operation, passing in the string and the
// current index
// 3. return the array as an array of string elements (flatten the results)

const substrings = function allSubstrings(string) {
  return [...string].reduce((arr, _, idx) => arr.concat(substringsAtStart(string.slice(idx))), []);
};
// Example:

console.log(substrings('abcde'));

// returns
// ['a', 'ab', 'abc', 'abcd', 'abcde', 'b', 'bc', 'bcd', 'bcde', 'c', 'cd', 'cde', 'd', 'de', 'e'];
