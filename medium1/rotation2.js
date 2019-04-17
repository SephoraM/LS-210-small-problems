// Write a function that rotates the last n digits of a number. For the rotation,
// rotate by one digit to the left, moving the first digit to the end.

// input: number, number which is the position from the end
// questions:
// - should I account for any other data type being given as an argument?
// - should I account for 1 or less arguments being given?
// - should I account for the case of the argument which idicates the n digit is too
// large for the size of the number to be rotated?
// - negative numbers for either argument?
// output: number which is the first argument's value with a digit at the position
// indicated by the second argument rotated, moving back to front.
// rules:
// assume that we only have to account for the 'happy paths' in the examples.
// remove a digit from the given number at postion N and append to the end of the number
// the position counts from the end of the number
// data structure: string
// algorithm:
// convert first argument to a string
// use a string template to compose a new string with:
// a slice of the string from start to negative second argument
// a slice of the string from negative second argument + 1 till the end
// a slice of the string from negative second argument till negative second argument + 1
// return string converted back to number

const rotateRightmostDigits = (number, n) => {
  const stringNum = String(number);
  const pos = stringNum.length - n;
  const rotated = `${stringNum.slice(0, pos)}${stringNum.slice(pos + 1)}${stringNum.slice(
    pos,
    pos + 1,
  )}`;

  return Number(rotated);
};

// Examples:

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
