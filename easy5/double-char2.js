/* Write a function that takes a string, doubles every consonant character in
the string, and returns the result as a new string. The function should not
double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace. */

const CONSONANTS = /[bcdfghjklmnpqrstvwxyz]/gi;
// string => string
// string => new string with each consonant character repepeated
// data structures: array, string
// iterate over every char in the given string
//   if the char is a consonant, double the letter and concatenate with new string
//   otherwise, concatenate the char with the new string
// return new string
function doubleConsonants(string) {
  return string
    .split('')
    .reduce((str, char) => (char.match(CONSONANTS) ? str + char.repeat(2) : str + char), '');
}

doubleConsonants('String'); // "SSttrrinngg"
doubleConsonants('Hello-World!'); // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th'); // "JJullyy 4tthh"
doubleConsonants(''); // ""
