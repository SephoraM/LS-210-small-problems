// Log all even numbers from 1 to 99, inclusive, to the console.
// Log all numbers on separate lines.

// () => undefined

function logEvenNumbers1() {
  for (let i = 2; i < 100; i += 2) {
    console.log(i);
  }
}

logEvenNumbers1();

// Further Exploration
/* Repeat this exercise with a technique different from the one that you used,
and different from the one provided. Also consider adding a way for the user
to specify the limits of the odd numbers logged to the console. */

function prompt(message) {
  const RL_SYNC = require('readline-sync');
  const response = RL_SYNC.question(message);
  const numberedResponse = parseInt(response, 10);

  if (String(numberedResponse) === response) {
    return numberedResponse;
  }
  console.log('That is not a valid input. Please type in an integer.');
  return prompt(message);
}

function promptUser() {
  const inputs = [];

  console.log('Please input starting and ending integers.');
  inputs.push(prompt('First number: '));
  inputs.push(prompt('Second number: '));

  return inputs.sort();
}

function logEvenNumbers(start, end) {
  if (start > end) return;

  if (!(start % 2 === 0)) {
    return logEvenNumbers(start + 1, end);
  }
  console.log(start);
  return logEvenNumbers(start + 2, end);
}

logEvenNumbers(...promptUser());
