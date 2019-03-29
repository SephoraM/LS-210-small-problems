/**
 * Write a function that takes a grocery list (a two-dimensional array) with each
 * element containing a fruit and a quantity, and returns a one-dimensional array
 * of fruits, in which each fruit appears a number of times equal to its quantity.
 */

// array of arrays => array of all the list items in the inner array with each item
// appearing as many times as the quantity element in the inner array
// 1. iterate over the given array transforming each element into the string element times
// the number element
const itemize = (item, quantity) => {
  const fruitItems = [];

  for (let i = 0; i < quantity; i += 1) {
    fruitItems.push(item);
  }

  return fruitItems;
};

// array, string, number
const buyFruit = fruits => fruits.reduce((list, fruit) => list.concat(itemize(...fruit)), []);

// array => array

// Example:

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
