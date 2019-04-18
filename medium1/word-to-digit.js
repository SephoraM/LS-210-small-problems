// Write a function that takes a sentence string as an argument, and returns that
// string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
// 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
// digit character.

// input: string
// output: string with any number words changed to their digit counterpart
// questions:
// - can I assume that the input will always be a valid string? -- Yes
// - can I assume that you don't want me to account for any numbers not in the given range?
//   - i.e., fifty-four, sixty, etc
// rules:
// - any words in the given string which represent numbers should be in digit form.
// - no changes to any other characters
// - if the given string is an empty string, return ''
// data structures: string, RegExp, array
// create a regular expression for the number words
// create an array of number words with each number on the corresponding index
// create a numberReplacer function:
// - input: matching word
// - output: index of the matching word from the number array
// replace the words in the given string with the result of calling numberReplacer
// return replaced string

const wordToDigit = (text) => {
  const numberRegex = /\b(zero|one|two|three|four|five|six|seven|eight|nine)\b/gi;
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const numberReplacer = match => numbers.indexOf(match);

  return text.replace(numberRegex, numberReplacer);
};

// Example:

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

console.log(wordToDigit('Please call me. Thanks.'));
// "Please call me. Thanks."

console.log(wordToDigit(''));
// ""

console.log(wordToDigit('weight niner'));
// "weight niner"
