/* The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
such that the first two numbers are 1 by definition, and each subsequent number
is the sum of the two previous numbers. This series appears throughout the
natural world.

Computationally, the Fibonacci series is a simple series, but the results grow
at an incredibly rapid rate. For example, the 100th Fibonacci number is
354,224,848,179,261,915,075—that's enormous, especially considering that it
takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument. (The first
  Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2. */

// number => number
// return the index of the first Fibonacci number which has the given number
// of digits. The first index is 1.
// Fibonacci numbers: next number is the sum of the two previous numbers
// first two numbers are 1, 1
// save the current index, save the last two numbers in the sequence
// calculate the next number, save the next index, check length of number
// if number has the given number of digits, return index

function findFibonacciIndexByLength(digits) {
  let secondToLast = 1;
  let last = 1;
  let temp;
  let index = 2;

  while (String(last).length < digits) {
    temp = last;
    last += secondToLast;
    secondToLast = temp;
    index += 1;
  }

  return index;
}

// Examples:

console.log(findFibonacciIndexByLength(2)); // 7
console.log(findFibonacciIndexByLength(10)); // 45
console.log(findFibonacciIndexByLength(16)); // 74
