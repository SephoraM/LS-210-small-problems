// Write a function that takes a year as an argument, and returns the number of
// 'Friday the 13ths' in that year. You may assume that the year is greater than
// 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You
// may also assume that the same calendar will remain in use for the foreseeable future.

// input: number which is a year
// output: number which is the number of fridays which fall on the 13th in the year
// rules:
// - use the Gregorian calendar
// - check every month of the given year on the 13th and count it if it was friday
// data structures: Date, loop construct
// algorithm:
// initialize a count variable for the fridays that are found
// loop from 0 to 12 exclusive, on each iteration:
//   create a new date object with the given year, the iterator (month), and 13 for the day
//   get the day from the object
//   if the day is 5, increment count by 1
// return count

const fridayThe13ths = (year) => {
  let fridayCount = 0;

  for (let i = 0; i < 12; i += 1) {
    if (new Date(year, i, 13).getDay() === 5) {
      fridayCount += 1;
    }
  }

  return fridayCount;
};

// Examples:

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
