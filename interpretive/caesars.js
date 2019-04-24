// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of
// the earliest and simplest ways to encrypt plaintextso that a message can be
// transmitted securely. It is a substitution cipher in which each letter in a plaintext
// is substituted by the letter located a given number of positions away in the alphabet.
// For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted
// with the letter 'D'. This shift value is often referred to as the key. The
// "encrypted plaintext" (ciphertext) can be decoded using this key value.
//
// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other
// character is left as is. The substituted letters are in the same letter case as the
// original letter. If the key value for shifting exceeds the length of the alphabet, it
// wraps around from the beginning.

// input: string, number
// string can be of any character, number is the number of positions to move the letter
// output: string which has been encyrpted using the number
// rules:
// - only letters in the string are substituted
// - lettercase matters: an uppercase letter is substituted for an uppercase (same for lower)
// - the letter substituted for the letter which is the given number of positions to the right
// - if the substitution position of the letter is greater than the last letter, wrap around
// - assumed knowledge: the askii code for each letter
// - if 0 is the number, no substitution is made
// - 97 - 122, 65 to 90
// data structures/types: string/regex, array
// number is the remainder of number / 26
// 3 places 122 -> 99
//  97 - 122 if current code + n > 122 then new code is current code - 26 + n
//  65 to 90 if current code + n > 90 then new code is current code - 26 + n
// split the string into its chars and transform each character by these rules:
// if current code + n > 90 and code is between 65 to 90 then new code is current code - 26 + n
// if current code + n > 122 and code is between 97 to 122 then new code is current code - 26 + n
// otherwise, don't transform the char
// join to string and return

const caesarEncrypt = (text, number) => {
  number %= 26;
  return text
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      if (charCode >= 97 && charCode <= 122) {
        return String.fromCharCode(
          charCode + number > 122 ? charCode - 26 + number : charCode + number,
        );
      }
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(
          charCode + number > 90 ? charCode - 26 + number : charCode + number,
        );
      }
      return char;
    })
    .join('');
};

// Examples:

// simple shift
console.log(caesarEncrypt('A', 0)); // "A"
console.log(caesarEncrypt('A', 3)); // "D"

// wrap around
console.log(caesarEncrypt('y', 5)); // "d"
console.log(caesarEncrypt('a', 47)); // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
