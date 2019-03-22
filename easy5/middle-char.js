/* Write a function that takes a non-empty string argument, and returns the
middle character(s) of the string. If the string has an odd length, you should
return exactly one character. If the string has an even length, you should
return exactly two characters. */

// str.length / 2 || str.length / 2 - 1
// str.length / 2 + 1
// string => string
// string => middle letter of the string if odd string length or middle two letters
// if even string length
function centerOf(str) {
  return str.slice(Math.ceil(str.length / 2) - 1, str.length / 2 + 1);
}

// Examples:

centerOf('I Love Ruby'); // "e"
centerOf('Launch School'); // " "
centerOf('Launch'); // "un"
centerOf('Launchschool'); // "hs"
centerOf('x'); // "x"
