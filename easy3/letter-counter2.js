/* Modify the wordSizes function from the previous exercise to exclude
non-letters when determining word size. For instance, the word size of
"it's" is 3, not 4. */

function wordSizes(str) {
  const wordLengths = {};
  const words = str.length === 0 ? [] : str.replace(/[^a-z\s]/gi, '').split(' ');
  words.forEach((word) => {
    wordLengths[word.length] = wordLengths[word.length] + 1 || 1;
  });
  return wordLengths;
}

// Examples:

wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!'); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "5": 1, "2": 1, "3": 1 }
wordSizes(''); // {}
