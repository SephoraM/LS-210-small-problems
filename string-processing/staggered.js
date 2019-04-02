// Write a function that takes a string as an argument, and returns that string with
// a staggered capitalization scheme. Every other character, starting from the first,
// should be capitalized and should be followed by a lowercase or non-alphabetic character.
// Non-alphabetic characters should not be changed, but should be counted as characters for
// determining when to switch between upper and lower case.

// string => string
// returned striing has every other letter capitalized starting from the first
// Do not change non-alphabetic characters but do count them
// --
// transform the letters based on the index and the character being alphabetic
const transformCase = (char, idx) => {
  if (/[a-z]/g.test(char) && idx % 2 === 0) return char.toUpperCase();
  if (/[A-Z]/g.test(char) && idx % 2 !== 0) return char.toLowerCase();
  return char;
};

const staggeredCase = string => string
  .split('')
  .map(transformCase)
  .join('');

// Examples:

console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers')); // "IgNoRe 77 ThE 444 NuMbErS"
