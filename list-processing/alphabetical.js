/**
 * Write a function that takes an array of integers between 0 and 19, and returns
 * an array of those integers sorted based on the English word for each number
 */

const ALPHABETIC_NUMBERS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

// array => array
// array of numbers => array of numbers based on the word for each number
// 1. iterate over the given array, transforming each element to the word that represents the value
// 2. sort the transformed array
// 3. transform the sorted array to the number which represents the word

const alphabeticNumberSort = numbers => numbers.sort((num1, num2) => {
  if (ALPHABETIC_NUMBERS[num1] < ALPHABETIC_NUMBERS[num2]) {
    return -1;
  } if (ALPHABETIC_NUMBERS[num1] > ALPHABETIC_NUMBERS[num2]) {
    return 1;
  }
  return 0;
});

// const alphabeticNumberSort = numbers => numbers
//   .map(number => ALPHABETIC_NUMBERS[number])
//   .sort()
//   .map(word => ALPHABETIC_NUMBERS.indexOf(word));

// Example:

console.log(
  alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
