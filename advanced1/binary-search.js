// It is quite common to find yourself in a situation where you need to perform a search to
// find something you're looking for. Imagine that you need to search through the yellow pages
// to find the phone number of a particular business. A straightforward way to do this would be
// to go through the yellow pages one business at a time, checking if the current business name
// is the one you're trying to find.

// This may be a simple and easy way to search, but it's not very efficient. In the worst case
// scenario, it could mean having to search through every single business name before finding out
// that the business isn't listed—or, slightly better, having to go through every letter from
// 'A' to 'Z' before finding the business. A linear search such as this can take quite a long time.
//
// A binary search algorithm is a much more efficient alternative. This algorithm allows
// you to cut the search area in half on each iteration by discarding the half that you
// know your search term doesn't exist in. The binary search algorithm is able to do this
// by relying on the data being sorted. Going back to the yellow pages example, let's say
// that we're searching the following yellowPagesdata for the search item 'Pizzeria':
//
// // Yellow pages list of business names data:
// var yellowPages = ['Apple Store', 'Bags Galore',
//                    'Bike Store',  'Donuts R Us',
//                    'Eat a Lot',   'Good Food',
//                    'Pasta Place', 'Pizzeria',
//                    'Ruby Lounge', 'Zooper'];
// With a linear search, we would have to sequentially go through each of the items until
// we found the search item 'Pizzeria'. In a binary search, however, the following sequence
// happens:
//
// Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
// If the middle value is equal to 'Pizzeria', stop the search.
// If the middle value is less than 'Pizzeria':
// Discard the lower half, including the middle value -->
// ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
// Repeat the process from the top, using the upper half as the starting data -->
// ['Good Food', 'Pasta Place', 'Pizzeria', 'Ruby Lounge', 'Zooper'].
// If the middle value is greater than 'Pizzeria', do the same as the previous step,
// but with opposite halves.
// Using the process described above, the search successfully ends on the second iteration
// when the middle value is 'Pizzeria'.
//
// Implement a binarySearch function that takes an array and a searchItem as arguments, and
// returns the index of the searchItem if found, or -1 otherwise. You may assume that the array
// argument will always be sorted.

// input: sorted array, searchItem
// output: index of the searchItem in the array or -1
// rules:
// - Retrieve the middle value from the data
//   - if the middle value is equal to the searchItem, return the index
//   - if the middle value is greater than the searchItem, discard the secondhalf
//   - if the middle value is less than the searchItem, discard the firsthalf
// - repeat process on the non-discarded half until the array has no values or array is empty
// - if array is empty, return -1
// data structures: array
// algorithm:
// if the array is empty, return -1
// if the middle value is equal to the searchItem, return the index
// if the middle value is greater than the searchItem, call binarysearch on the firsthalf
// if the middle value is less than the searchItem, call binarysearch on the firsthalf

const binarySearch = (data, searchItem) => {
  let startIndex = 0;
  let endIndex = data.length;
  let middleIndex = Math.floor(endIndex / 2);
  let middleValue;

  while (middleIndex < endIndex) {
    middleValue = data[middleIndex];
    if (middleValue === searchItem) return middleIndex;
    if (searchItem < middleValue) {
      endIndex = middleIndex;
      middleIndex = Math.floor(endIndex / 2);
    } else {
      startIndex = middleIndex + 1;
      middleIndex = Math.floor((endIndex + startIndex) / 2);
    }
  }

  return -1;
};

const yellowPages = [
  'Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Ruby Lounge',
  'Zooper',
];
console.log(binarySearch(yellowPages, 'Pizzeria')); // 7
console.log(binarySearch(yellowPages, 'Apple Store')); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter')); // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler')); // 6
