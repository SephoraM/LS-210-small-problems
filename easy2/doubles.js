/* A double number is an even-length number whose left-side digits are exactly
the same as its right-side digits. For example, 44, 3333, 103103, and 7676 are
all double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; return double numbers as-is. */

// Rules for double number:
// even-length
// left side digits are the same as right side digits
function isDouble(number) {
  const numString = String(number);
  const halfLength = numString.length / 2;

  return numString.slice(0, halfLength) === numString.slice(halfLength);
}

// number => number
// check if double number
// if double number, return as is
// otherwise, multiply by 2 and return new value
function twice(number) {
  if (isDouble(number)) {
    return number;
  }
  return number * 2;
}

// Examples:

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
