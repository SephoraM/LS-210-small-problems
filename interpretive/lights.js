// You have a bank of switches before you, numbered from 1 to n. Every switch is
// connected to exactly one light that is initially off. You walk down the row of
// switches and toggle every one of them. You walk back to the beginning of the row
// and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on.
// On the third pass, you go back to the beginning again, this time toggling
// switches 3, 6, 9, and so on. You continue to repeat this process until you have gone
// through n repetitions.
//
// Write a program that takes one argument—the total number of switches—and returns an
// array of the lights that are on after nrepetitions.

// input: number which represents the number of lights
// output: array with the numbers which represent the positions of the lights that
//         are on at the end of the sequence
// rules:
// - bank of light switches starts at 1 and ends at given number
// - the function will execute n (the given number) of iterations
// - upon each iteration switches are toggled with the formula:
// - iteration 1 -> increment iterator by one and toggle each
// - iteration 2 -> increment iterator by two start at two and toggle each
// - iteration 2 -> increment iterator by three start at three and toggle each
// - iteration 2 -> increment iterator by four start at four and toggle each
// - iteration 2 -> increment iterator by five start at five and toggle each
// - ... until n inclusive
// data structures/types: object, array, number, looping construct
// algorithm:
// create an empty object to store the bank of switches
// loop from 1 to n, increment by 1
//  - loop from i to n, increment by i
//    - assign a property in the object with the iterator as a key and the opposite
//      boolean as value or true if undefined
// return the properties which have a true value in number data type

// Examples:

const lightsOn = (switches) => {
  const switchBank = {};

  for (let i = 1; i <= switches; i += 1) {
    for (let j = i; j <= switches; j += i) {
      switchBank[j] = !switchBank[j];
    }
  }

  return Object.keys(switchBank)
    .filter(key => switchBank[key])
    .map(Number);
};

console.log(lightsOn(5)); // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100)); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
