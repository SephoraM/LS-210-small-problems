/**
 * Building on the previous exercise, write a function that returns true or false
 * based on whether or not an inventory item is available. As before, the function
 * takes two arguments: an inventory item and a list of transactions. The function
 * should return true only if the sum of the quantity values of the item's
 * transactions is greater than zero. Notice that there is a movement property in
 * each transaction object. A movement value of 'out' will decrease the item's
 * quantity.
 *
 * You may (and should) use the transactionsFor function from the previous exercise.
 */

const isInventoryItem = (number, item) => item.id === number;

const transactionsFor = (number, items) => items.filter(item => isInventoryItem(number, item));

// every movement in adds to the quantity,
// every movement out subracts from the quantity
// if movement is out, the quantity integer should become negative

// grab all the transactions for the given id,
// iterate over the transactions, transforming each quantity to negative if movement value is out

// reduce the quantity values to their sum
// check the sum value, if greater than 0: true, else: false
// number, array => boolean
const isItemAvailable = (itemId, transactions) => transactionsFor(itemId, transactions).reduce(
  (sum, transaction) => sum + (transaction.movement === 'in' ? transaction.quantity : -transaction.quantity),
  0,
) > 0;

// Examples:

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

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
