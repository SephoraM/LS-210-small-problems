/* Write a function that takes a year as input and returns the century. The
return value should be a string that begins with the century number, and ends
with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century. */

// number => string
// 1 - st, 2 - nd, 3 - rd, 4 - th, 5 - th, 6 - th, 7 - th, 8 - th, 9 - th, 10 - th
// return the correct suffix to the century
function determineOrdinal(year) {
  const lastDigit = year % 10;
  let ordinal;

  if (lastDigit === 1) {
    ordinal = 'st';
  } else if (lastDigit === 2) {
    ordinal = 'nd';
  } else if (lastDigit === 3) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }

  return ordinal;
}

// number => string
// if the year is less than 100, it is the 1st century
// otherwise, remove the last two digits from the end of the given year
// if the last digit (from the given number) is greater than 0, add 1 to what's
// left of the given number after the last two digits were removed
function century(year) {
  let cent;
  const lastYear = year % 10;

  if (year < 100) {
    return '1st';
  }
  cent = Math.floor(year / 100);
  cent += lastYear > 0 ? 1 : 0;
  return cent + determineOrdinal(cent);
}

// Examples:

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
