/* Write a function that takes a positive integer, n, as an argument, and logs
a right triangle whose sides each have n stars. The hypotenuse of the triangle
(the diagonal side in the images below) should have one end at the lower-left
of the triangle, and the other end at the upper-right. */

// number => undefined
// iterate from 1 to given number inclusive
// for each iteration, log space * number - iterator + star * iterator

function triangle(number) {
  for (let i = 1; i <= number; i += 1) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
  }
}

// Examples:

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
