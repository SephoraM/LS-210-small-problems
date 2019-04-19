// A 'featured number' (something unique to this exercise) is an odd number that is a
// multiple of 7, with all of its digits occuring exactly once each. For example, 49
// is a featured number, but 98 is not (it is not odd), 97 is not (it is not a multiple
// of 7), and 133 is not (the digit 3 appears twice).
//
// Write a function that takes an integer as an argument, and returns the next featured
// number greater than the integer. Issue an error message if there is no next featured number.

// input: number which is the starting number for the search (non-inclusive)
// output: number which is the featured number or an error message
// question:
// - should we consider the highest safe integer value the breaking point for
//   searching for the next featured number? Is that the point at which we should
//   issue an error message?  - Number.MAX_SAFE_INTEGER
// - should we account for any data type which is not an integer.
// - negative numbers?
// rules:
// - featured number is:
//   - odd number
//   - multiple of 7
//   - each digit occurs only once
// look for the next number which comes after the given number that passes all the
// requirements
// return that number or an error message if no safe number exists which passes the
// requirements
// data structures: number, string, array
// algorithm:
// is featured number:
// - given number % 2 === 1 -- odd
// - and given number % 7 === 0 -- multiple of 7
// - and
// - create an empty array to store unique digits
// - convert number to string and split by digit
// - iterate over digits,
//     if the digit is not in the unique digits array, push it onto the array
// - the string length and the unique length must be the same
// next featured:
// counter = (if given number + 1 is odd: given number + 1 or given number + 2)
// while counter is < Number.MAX_SAFE_INTEGER
//  - if counter is a featured number, return counter
//  - otherwise, increment counter by 2
// return 'No featured number exists!'
const hasUniqueDigits = (number) => {
  const digits = String(number).split('');
  const uniqueDigits = [];

  digits.forEach((digit) => {
    if (uniqueDigits.indexOf(digit) === -1) uniqueDigits.push(digit);
  });

  return uniqueDigits.length === digits.length;
};

const oddSevenMultiple = (number) => {
  let counter = number % 2 === 0 ? number + 1 : number + 2;

  while (counter < Number.MAX_SAFE_INTEGER) {
    if (counter % 2 === 1 && counter % 7 === 0) return counter;
    counter += 2;
  }

  return counter;
};

const featured = (number) => {
  let possibleFeature = oddSevenMultiple(number);

  while (possibleFeature < Number.MAX_SAFE_INTEGER) {
    if (hasUniqueDigits(possibleFeature)) return possibleFeature;
    possibleFeature += 14;
  }

  return 'No featured number exists!';
};

// Examples:

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9007199254740991)); // No featured number exists!
