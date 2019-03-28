/**
 * Write a function that takes a string argument, and returns a list of all
 * substrings that start from the beginning of the string, ordered from shortest
 * to longest.
 */

// string => array
const substringsAtStart = string => string.split('').map((_, idx) => string.slice(0, idx + 1));

// Examples:

console.log(substringsAtStart('abc')); // ["a", "ab", "abc"]
console.log(substringsAtStart('a')); // ["a"]
console.log(substringsAtStart('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
