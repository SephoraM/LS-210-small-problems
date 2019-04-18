// function from previous exercise
const rotateRightmostDigits = (number, n) => {
  const stringNum = String(number);
  const pos = stringNum.length - n;
  const rotated = `${stringNum.slice(0, pos)}${stringNum.slice(pos + 1)}${stringNum.slice(
    pos,
    pos + 1,
  )}`;

  return Number(rotated);
};

// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to get
// 329175. Keep the first two digits fixed in place and rotate again to get 321759.
// Keep the first three digits fixed in place and rotate again to get 321597.
// Finally, keep the first four digits fixed in place and rotate the final two
// digits to get 321579. The resulting number is called the maximum rotation of the
// original number.
//
// Write a function that takes an integer as an argument, and returns the maximum
// rotation of that integer. You can (and probably should) use the rotateRightmostDigits
// function from the previous exercise.

// input: number
// output: number which has been rotated
// 735291 -> 352917 last digit rotated to end
// 352917 -> 329175 first digit kept in place, second digit moved to end
// 329175 -> 321759 first two digits kept in place, third digit moved to end.
// ...
// 105 -> 051
// 051 -> 15
// data structure: string, array
// iterate from length of number in string format to greater than 1 times:
// - number is reassigned the value of calling rotateRightmostDigits with the
//   current count as the second argument and the number as the first,
// return the final number

const maxRotation = (number) => {
  let rotatedNum = number;

  for (let i = String(number).length; i > 1; i -= 1) {
    rotatedNum = rotateRightmostDigits(rotatedNum, i);
  }

  return rotatedNum;
};

// Examples:

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
