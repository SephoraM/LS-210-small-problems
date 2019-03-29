/**
 * Write a function that takes two arguments, inventoryItem and transactions, and
 * returns an array containing only the transactions for the specified inventoryItem.
 */

// number, array of objects => array of objects
// number represents an id property of an object stored in the given array
// => an array of objects which have the id value of the given number
// 1. filter the given array for any objects which have the given id value
// return an array of the objects which pass through that filter
// isInventoryItem function -- object, number => boolean
// transactionsFor function -- array of objects => array of objects which pass hasInventoryItem

const isInventoryItem = (number, item) => item.id === number;

const transactionsFor = (number, items) => items.filter(item => isInventoryItem(number, item));

// Example

const transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 15 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
