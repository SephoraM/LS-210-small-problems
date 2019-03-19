// Write a program that solicits six numbers from the user, then logs a message
// that describes whether or not the sixth number appears amongst the first five
// numbers.

function promptNumber(signifier) {
  return prompt(`Enter the ${signifier} number: `);
}

function appendSuffix(digit) {
  if (digit === 1) return '1st';
  if (digit === 2) return '2nd';
  if (digit === 3) return '3rd';
  return `${digit}th`;
}

function searching() {
  const arr = [];

  for (let i = 1; i <= 5; i += 1) {
    arr.push(promptNumber(appendSuffix(i)));
  }
  const last = promptNumber('last');

  if (arr.includes(last)) {
    console.log(`The number ${last} appears in [${arr}].`);
  } else {
    console.log(`The number ${last} does not appear in [${arr}].`);
  }
}

searching();

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17
//
// The number 17 appears in [25, 15, 20, 17, 23].
//
// -----
//
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18
//
// The number 18 does not appear in [25, 15, 20, 17, 23].
