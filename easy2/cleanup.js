/* Given a string that consists of some words and an assortment of
non-alphabetic characters, write a function that returns that string with all
of the non-alphabetic characters replaced by spaces. If one or more
non-alphabetic characters occur in a row, you should only have one space in
the result (i.e., the result string should never have consecutive spaces). */

// string => string
// take the given string and replace all non-alphabetic characters with a space
// if there are more than one non-alphabetic chars in a row, only use one space
// to replace them.
function cleanUp(string) {
  return string.replace(/[^a-z]+/gi, ' ');
}

// Example:

console.log(cleanUp("---what's my +*& line?")); // " what s my line "
