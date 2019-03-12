/* Write a function that determines and returns the ASCII string value of a
string passed in as an argument. The ASCII string value is the sum of the
ASCII values of every character in the string.
(You may use String.prototype.charCodeAt() to determine the ASCII value of a
character.) */

// string => number
// iterate over every character in a string, take the character  ASCII code
// add the code to a total which is returned by the function
function asciiValue(string) {
  let total = 0;

  for (let i = 0; i < string.length; i += 1) {
    total += string.charCodeAt(i);
  }

  return total;
}

// Examples:

console.log(asciiValue('Four score')); // 984
console.log(asciiValue('Launch School')); // 1251
console.log(asciiValue('a')); // 97
console.log(asciiValue('')); // 0
