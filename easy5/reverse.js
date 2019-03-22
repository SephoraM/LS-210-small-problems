/* Write a function that takes a string argument, and returns a new string
containing the words from the string argument in reverse order. */

// string => string
// string => new string with all the words from the given string in reverse order
function reverseSentence(string) {
  return string
    .split(' ')
    .reverse()
    .join(' ');
}

// Examples:

reverseSentence(''); // ""
reverseSentence('Hello World'); // "World Hello"
reverseSentence('Reverse these words'); // "words these Reverse"
