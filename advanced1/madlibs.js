// Let's build another program using madlibs. We made a similar program in the Easy exercises,
// but this time the requirements are a bit different.
//
// Build a madlibs program that takes a text template as input, plugs in a selection of
// randomized nouns, verbs, adjectives, and adverbs into that text, and then returns it.
// You can build your lists of nouns, verbs, adjectives, and adverbs directly into your program.
// Your program should read this text and, for each line, place random words of the appropriate
// types into the text and return the result.
//
// The challenge of this program isn't just about writing your solution—it's about choosing the
// structure of the text template. Choose the right way to structure your template and this
// problem becomes much easier. Consequently, this exercise is a bit more open-ended since the
// input is also something that you'll be defining.
//
// Examples:
//
// Note: The quotes in the example strings returned by the madlibs function are only shown for
// emphasis. These quotes are not present in the actual output strings. The words in quotes come
// from the list of texts and it is the madlibs function that puts them in.

// input: string with the replacement word-types as substitutes for the words
// output: new string with words replaced
// rules:
// - replace any word-types in the given string with a random word from the replacement list
// - return empty string if the given string is empty
// data structures/types: string, RegExp, object, array, Math

// create an object and give it the word-types as properties with arrays of words as values
// create a regular expression that will match /\b(adjective|noun|verb|adverb)\b/g
// and replace all the occurances of the matching word-types with
// a random word from a list of words of that word-type
// random: Math.floor(Math.random() * Math.floor(length of array of type))
// replace each occurance with a random value from the word-types object of the matched property

const madlibs = (template) => {
  const typeRegex = /\b(adj|noun|verb|adv)\b/g;

  const replacementWords = {
    adj: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adv: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  const randomIdx = wordList => Math.floor(Math.random() * Math.floor(wordList.length));

  const replacer = wordType => replacementWords[wordType][randomIdx(replacementWords[wordType])];

  return template.replace(typeRegex, replacer);
};

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

const template1 = 'The adj brown noun adv verb the adj yellow noun, who adv verb his noun and looks around.';
const template2 = "The noun verb the noun's noun.";

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2)); // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2)); // The "cat" "pats" the "cat"'s "head".
