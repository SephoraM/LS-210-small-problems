/* Write a function that determines the mean (average) of the three scores
passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative
values or values greater than 100.
*/

// number, number, number => string
// take the three grades and get the average of the three given numbers
// check the average to see which condition evaluates to true to determine grade
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
// As the scores will never be higher than 100 or less than 0, those values
// do not need to be addressed
function getGrade(...scores) {
  const meanScore = scores.reduce((acc, val) => acc + val, 0) / scores.length;

  if (meanScore >= 90) return 'A';
  if (meanScore >= 80) return 'B';
  if (meanScore >= 70) return 'C';
  if (meanScore >= 60) return 'D';
  return 'F';
}

// Examples:

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
