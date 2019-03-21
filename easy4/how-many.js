/* Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of occurrences.
*/

// array => undefined
// array of elements => each 'element => (number of element occurrences)'
// data structure: object, array
// count the number of times each element occurs within the given string
// log the element and the number of times it occurred
function countOccurrences(array) {
  const occurrences = array.reduce((obj, val) => {
    obj[val] = obj[val] + 1 || 1;
    return obj;
  }, {});

  return Object.keys(occurrences).forEach((key) => {
    console.log(`${key} => ${occurrences[key]}`);
  });
}

// Example:

const vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
