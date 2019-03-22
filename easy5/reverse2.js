/* Write a function that takes a string argument containing one or more words,
and returns a new string containing the words from the string argument. All
five-or-more letter words should have their letters in reverse order. The string
argument will consist of only letters and spaces. Words will be separated by a
single space. */

// string => string
// string of one or more words =>
// new string containing all the words from the given string, with words that
// have five or more letters with the letters reversed
// split the string into words
// iterate over the words
//   if the current word has five or more letters, split into the chars
//     and reverse the order of the letters before returning to string
//   otherwise, do not transform the word
// join the words into a string and return
function reverseIfLarge(word, length) {
  return word.length >= length
    ? word
      .split('')
      .reverse()
      .join('')
    : word;
}

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => reverseIfLarge(word, 5))
    .join(' ');
}

// Examples:

reverseWords('Professional'); // "lanoisseforP"
reverseWords('Walk around the block'); // "Walk dnuora the kcolb"
reverseWords('Launch School'); // "hcnuaL loohcS"
