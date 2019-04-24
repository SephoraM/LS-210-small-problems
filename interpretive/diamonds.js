// Write a function that displays a four-pointed diamond in an nxn grid, where n is
// an odd integer supplied as an argument to the function. You may assume that the
// argument will always be an odd integer.

// input: number which an odd integer
// output: four pointed diamond in an n (given number) * n grid
// - returns undefined; the function executes a side effect
// rules:
// - n is an odd integer
// - grid layout: width: n at widest point, height: n
// each row has stars which are incremented by two starting with one until n / 2 truncated
// at which point stars are decremented by two
// each row has n - stars / 2 padding at the start of the row
// data structures: String, looping construct

// initialize a star string variable to an empty string
// loop from 0 to given number exlusive
//   if the iterator is less than or equal to given number / 2 floored
//   - repeat a star by length of star string + 2 or 1 if no length
//   - pad the start of the string with spaces by given number + star string length / 2
//   otherwise:
//   - repeat a star by length of star string - 2
//   - pad the start of the string with spaces by given number + star string length / 2
//   log padded star string

const diamond = (number) => {
  let stars = '';
  let paddedRow;

  for (let i = 0; i < number; i += 1) {
    if (i <= Math.floor(number / 2)) {
      stars = '*'.repeat(stars.length ? stars.length + 2 : 1);
    } else {
      stars = '*'.repeat(stars.length ? stars.length - 2 : 1);
    }
    paddedRow = stars.padStart((number + stars.length) / 2, ' ');
    console.log(paddedRow);
  }
};

// Examples:

diamond(1);
// logs
// *
diamond(3);
// logs
//  *
// ***
//  *
diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
