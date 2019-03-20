/* Build a program that logs when the user will retire and how many more years
the user has to work until retirement. */

// prompt for age => string which represents the integer value of age
// prompt for retirement age => string which represents the integer value of retirement age
// log the current year and the retirement year
// log the remaining years to work

const age = parseInt(prompt('What is your age?'), 10);
const retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);
const currentYear = new Date().getFullYear();
const yearsLeft = retirementAge - age;
const yearOfRetirement = currentYear + yearsLeft;

console.log(`It's ${currentYear}. You will retire in ${yearOfRetirement}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);

// Example:
//
// What is your age? 30
// At what age would you like to retire? 70
//
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
