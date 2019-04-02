// Modify the function from the previous exercise so that it ignores non-alphabetic
// characters when determining whether a letter should be upper or lower case.
// Non-alphabetic characters should still be included in the output string, but
// should not be counted when determining the appropriate case.

// string => string
// returned string has every other letter capitalized starting from the first
// Do not change non-alphabetic characters and do not count them
// --
// transform the letters based on the index and the character being alphabetic

const staggeredCase = (string) => {
  let uppercase = false;

  return string
    .split('')
    .map((char) => {
      if (/[a-z]/gi.test(char)) {
        uppercase = !uppercase;
        return uppercase ? char.toUpperCase() : char.toLowerCase();
      }
      return char;
    })
    .join('');
};

console.log(staggeredCase('I Love Launch School!')); // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS')); // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers')); // "IgNoRe 77 ThE 444 nUmBeRs"
