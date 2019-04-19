// Write a function that takes a string, and returns an object containing the following
// three properties:
//
// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither
// You may assume that the string will always contain at least one character.

// input: string of characters
// output: object with three properties: lowercase: percentage, uppercase: percentage
//         neither: percentage
// rules:
// - string will always contain at least one character
// - percentage format is 'xx:xx'
// - the object which returns the values will always have each property
// - if the property has a zero percent value the format is '0:00'
// - assumed knowledge: how to determine percentage
// - formula:
// Divide the number of letter type by the number of characters
// Multiply the answer by 100
// Round to the desired precision

// data structures: object, string, array, regexp
// algorthim:
// return an object with three properties
// for each property, give it the value of calculating the percentage
// - subroutine which receives the string and the regular expression.
//   - returns a formatted string of the percentage

// determinePercentage subroutine
// input: string, regexp
// output: formatted string which is the percentage of characters which match regex in string
// chars = get the length of an array of matched chars in the string
// percentage = (chars / string.length) * 100 fixed to 2 decimal points
const percentage = (str, matches) => ((matches.length / str.length) * 100).toFixed(2);

const letterPercentages = string => ({
  lowercase: percentage(string, string.match(/[a-z]/g) || []),
  uppercase: percentage(string, string.match(/[A-Z]/g) || []),
  neither: percentage(string, string.match(/[^a-z]/gi) || []),
});

// Examples:

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
