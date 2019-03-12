/* Write a function that takes a string argument, and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character. */

// string => string
// iterate over each character in the given string
// if the character is not a duplicate of the preceding character, concatenate
// to new string
// otherwise, do not concatenate
// return new string
function crunch(string) {
  let newString = '';
  let index = -1;

  for (let i = 0; i < string.length; i += 1) {
    if (newString[index] !== string[i]) {
      newString += string[i];
      index += 1;
    }
  }

  return newString;
}

// Examples:

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""

function crunchRegExp(str) {
  return str.replace(/(.)\1+/g, '$1');
}

console.log(crunchRegExp('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunchRegExp('4444abcabccba')); // "4abcabcba"
console.log(crunchRegExp('ggggggggggggggg')); // "g"
console.log(crunchRegExp('a')); // "a"
console.log(crunchRegExp('')); // ""
