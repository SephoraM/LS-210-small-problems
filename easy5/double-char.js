/* Write a function that takes a string, doubles every character in the string,
and returns the result as a new string. */

// string => string
// string => string with every character in string repeated
// data structure: array
// iterate over each character in the string and repeat the character
// before concatenating to new string
// return the new string
function repeater(string) {
  return string
    .split('')
    .map(char => char.repeat(2))
    .join('');
}

// Examples:

repeater('Hello'); // "HHeelllloo"
repeater('Good job!'); // "GGoooodd  jjoobb!!"
repeater(''); // ""
