// A 3x3 matrix can be represented by an array of arrays: an outer array containing
// three subarrays that each contain three elements. For example, the 3x3 matrix shown
// below:
//
// 1  5  8
// 4  7  2
// 3  9  6
// is represented by the following array of arrays:
//
// var matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];
// An array of arrays is sometimes called a "nested array" because each inner subarray
// is nested inside an outer array. It also may be called a "two-dimensional array"
//
// To access an element in the matrix, you can use bracket notation twice (such as array[][]),
// and include both the row index and column index within the brackets. Given the above matrix,
// matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using
// a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can
// determine the total number of columns by counting the number of elements in the row.
// Unfortunately, a convenient notation for accessing an entire column does not exist.
// The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns
// of the original matrix. For example, the transposition of the matrix shown above is:
//
// 1  4  3
// 5  7  9
// 8  2  6
// Write a function that takes an array of arrays representing a 3x3 matrix, and returns the
// transpose of the matrix. You should implement the function on your own, without using any
// external libraries.
//
// Take care not to modify the original matrix — your function must produce a new matrix and
// leave the input matrix array unchanged.
//

// input: array of three nested arrays with 3 elements each
// output: array of three nested arrays with 3 elements each where they are transposed
// question:
// - should I consider any other data types or arrays which do not have the correct values?
// rules:
// - the given array contains 3 nested arrays
// - each subarray has 3 elements
// - transposition of the elements will return a new array with the elements
//   within the subarrays having the values of the nth index of the all the nested arrays
// - the array and the subarrays that are given are not mutated
// data structures: array
// algorithm:
// iterate over the given array and create a new array transforming each subarray to a new subarray
// with elements which are the elements of each subarray at the current index

const transpose = array => array.map((_, idx, arr) => [arr[0][idx], arr[1][idx], arr[2][idx]]);

// Examples:

const matrix = [[1, 5, 8], [4, 7, 2], [3, 9, 6]];

const newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
