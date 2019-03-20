/* Write a function that takes a string consisting of one or more space
separated words, and returns an object that shows the number of words of
different sizes.

Words consist of any sequence of non-space characters. */
// string => object
// split string into words
// iterate over the words and check their length
// add to the tally of words of that length
// return the object which contains the tally of all the word lengths which
// were part of the string
function wordSizes(str) {
  const wordLengths = {};
  const words = str.length === 0 ? [] : str.split(' ');
  words.forEach((word) => {
    wordLengths[word.length] = wordLengths[word.length] + 1 || 1;
  });
  return wordLengths;
}

// Examples:

wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
wordSizes(''); // {}
