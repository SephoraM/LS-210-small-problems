// A collection of spelling blocks has two letters per block, as shown in this list:
//
// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not
// use both letters from any given block. You can also only use each block once.
//
// Write a function that takes a word string as an argument, and returns true if the
// word can be spelled using the set of blocks, or false otherwise. You can consider
// the letters to be case-insensitive when you apply the rules.

// input: string which can have letters of any case; a word
// output: boolean; true for word which can be spelled and false for word which can't
// rules:
// - collection of spelling blocks each with two letters
// - words can only use one of the two letters on a block
// - words can only use one of the two letters once in a word
// - letters are case-insensitive
// data structures: object, array, string/regex?
// create an object and give it the letter pair blocks as properties
// - store the values for each letter in an array (K: ['X','K'])

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
const letterBlocks = {
  B: ['B', 'O'],
  O: ['B', 'O'],
  X: ['X', 'K'],
  K: ['X', 'K'],
  D: ['D', 'Q'],
  Q: ['D', 'Q'],
  C: ['C', 'P'],
  P: ['C', 'P'],
  N: ['N', 'A'],
  A: ['N', 'A'],
  G: ['G', 'T'],
  T: ['G', 'T'],
  R: ['R', 'E'],
  E: ['R', 'E'],
  F: ['F', 'S'],
  S: ['F', 'S'],
  J: ['J', 'W'],
  W: ['J', 'W'],
  H: ['H', 'U'],
  U: ['H', 'U'],
  V: ['V', 'I'],
  I: ['V', 'I'],
  L: ['L', 'Y'],
  Y: ['L', 'Y'],
  Z: ['Z', 'M'],
  M: ['Z', 'M'],
};

// uppercase the given word
// create an empty array which will store the used letters
// iterate over the given string
// if the letter is in the used letter array, return false
// else, use the letter to access the blocks object
//       concatenate the used array with the array of the letter pair
// return true when the loop ends
const isBlockWord = (word) => {
  const wordUp = word.toUpperCase();
  const usedLetters = [];

  for (let i = 0; i < word.length; i += 1) {
    if (usedLetters.includes(wordUp[i])) return false;

    usedLetters.push(...letterBlocks[wordUp[i]]);
  }

  return true;
};

// Examples:

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
