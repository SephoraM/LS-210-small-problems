/**
 * Write a function that returns a list of all substrings of a string that are
 * palindromic. That is, each substring must consist of the same sequence of
 * characters forwards as backwards. The substrings in the returned list should
 * be sorted by their order of appearance in the input string. Duplicate
 * substrings should be included multiple times.
 *
 * You may (and should) use the substrings function you wrote in the previous
 * exercise.
 *
 * For the purpose of this exercise, you should consider all characters and pay
 * attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
 * are not. In addition, assume that single characters are not palindromes.
 */
const substringsAtStart = string => [...string].map((_, idx) => string.slice(0, idx + 1));

const substrings = function allSubstrings(string) {
  return [...string].reduce((arr, _, idx) => arr.concat(substringsAtStart(string.slice(idx))), []);
};

const isPalindrome = string => string === [...string].reverse().join('') && string.length > 1;

// string => array of all substrings which are palindromes
// 1. take all the substrings of the given string and filter the array to return all the
// substrings which are palindromes
const palindromes = string => substrings(string).filter(isPalindrome);

console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [
//   'll',
//   '-madam-',
//   '-madam-did-madam-',
//   'madam',
//   'madam-did-madam',
//   'ada',
//   'adam-did-mada',
//   'dam-did-mad',
//   'am-did-ma',
//   'm-did-m',
//   '-did-',
//   'did',
//   '-madam-',
//   'madam',
//   'ada',
//   'oo',
// ];

console.log(palindromes('knitting cassettes'));
// returns
// ['nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'];
