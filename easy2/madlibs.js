/* Madlibs is a simple game where you create a story template with "blanks" for
words. You, or another player, then construct a list of words and place them
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and
an adjective, and injects them into a story that you create. */

// string, string, string, string => string
// take the four given strings and inject them into a new string
// return the new string
function madlibConstructor(noun, verb, adverb, adjective) {
  return `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
}

// () => undefined
// prompt for a noun
// prompt for a verb
// prompt for an adverb
// prompt for an adjective
// call the madlibConstructor
// return the result
function playMadlib() {
  const noun = prompt('Enter a noun: ');
  const verb = prompt('Enter a verb: ');
  const adjective = prompt('Enter an adjective: ');
  const adverb = prompt('Enter an adverb: ');

  console.log(madlibConstructor(noun, verb, adverb, adjective));
}

playMadlib();

// Example:

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
