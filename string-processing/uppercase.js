// Write a function that takes a string argument, and returns true if all of the
// alphabetic characters inside the string are uppercase; false otherwise. Ignore
// characters that are not alphabetic.

// string => boolean
// if every character in the given string is uppercase, return true
// otherwise, return false
const isUppercase = text => text === text.toUpperCase();

// Examples:

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true
