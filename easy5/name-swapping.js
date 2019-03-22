/* Write a function that takes a string argument consisting of a first name, a
space, and a last name, and returns a new string consisting of the last name,
a comma, a space, and the first name. */

// string => string
// split the name into first and last name
// reverse the postiion of the names
// join with ', '
// return joined name
function swapName(fullName) {
  return fullName
    .split(' ')
    .reverse()
    .join(', ');
}

// Examples:

swapName('Joe Roberts'); // "Roberts, Joe"

// further exploration:

function swapLastName(fullName) {
  const names = fullName.split(' ');
  const lastName = names.pop();

  return `${lastName}, ${names.join(' ')}`;
}

swapLastName('Karl Joe Roberts');
