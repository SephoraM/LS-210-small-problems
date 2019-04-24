// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd
// integer that is supplied as an argument to the function. The smallest such star you
// need to handle is a 7x7 grid (i.e., when n is 7).

// input: number which is the number of columns and the number of rows
// output: side effect which is a star pattern made of stars and spaces
// rules:
// - three stars in every row except the middle row which has the given number of stars
// - there are given number of rows
// - the given number is always an odd number
// - the argument will always be 7 or higher
// - the length of each row is the given number
// - the middle of an odd number is number / 2 floored
// - rows: (excepting the middle row) the second half is the first half of rows reversed
// - first row: star on far right, in middle, and far left. spaces in between to create n length
// - all following rows have the right and left stars move in by 1, spaces are moved out
// data structures/types: string, array
// algorithm:
// create an array which will have strings for the first half
// store n / 2 floored - 1 which will be used as a counter for inner spaces
// iterate from 0 to n / 2 floored exclusive
//  - push to rows array concatenation of:
//    iteratorSpaces + star + innerSpaces + star + innerSpaces + star + iteratorSpaces
// iterate over the stored rows and log each to console
// log '*' repeated n number of times
// iterate over the reversed stored rows and log each to console

const star = (n) => {
  const rows = [];
  let inner = Math.floor(n / 2) - 1;

  for (let i = 0; i < Math.floor(n / 2); i += 1) {
    rows.push(`${' '.repeat(i)}*${' '.repeat(inner)}*${' '.repeat(inner)}*${' '.repeat(i)}`);
    inner -= 1;
  }

  rows.forEach((row) => {
    console.log(row);
  });

  console.log('*'.repeat(n));

  rows.reverse().forEach((row) => {
    console.log(row);
  });
};

// Examples:

star(7);
// logs
// *  *  * star space space star space space star
//  * * *  space star space star space star space
//   ***   space space star star star space space
// ******* star star star star star star star
//   ***   space space star star star space space
//  * * *  space star space star space star space
// *  *  * star space space star space space star
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
