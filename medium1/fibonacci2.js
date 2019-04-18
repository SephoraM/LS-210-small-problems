// In the previous exercise, we developed a recursive solution for computing the nth
// Fibonacci number. In a language that is not optimized for recursion, some (but not all)
// recursive functions can be extremely slow and may require massive quantities of memory
// and/or stack space. If you tested for bigger nth numbers, you might have noticed that
// getting the 50th fibonacci number already takes a significant amount of time.
//
// Fortunately, every recursive function can be rewritten as a non-recursive (or procedural)
// function.
//
// Rewrite your recursive fibonacci function so that it computes its results without using
// recursion.

// input: number which is the nth postion in the fibonacci sequence
// output: number which is the nth number in the fibonacci sequence
// rules:
// - use an iterative approach to the solution
// - calculate the sum of the last two digits in the sequence to get the next number
// algorithm:
// initialize first place in sequence to 1,
// initialize last place in sequence to 1,
// create a temporary variable
// loop from 2 till given number inclusive
//   - assign a temporary variable with the value of last
//   - assign the last variable to the sum of the temporary variable and the first
//   - assign the first variable with the temporary variable
// return the last number

const fibonacci = (n) => {
  let lastTwo = [1, 1];

  for (let i = 3; i <= n; i += 1) {
    lastTwo = [lastTwo[1], lastTwo[0] + lastTwo[1]];
  }

  return lastTwo[1];
};

// Examples:

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(100)); // 354224848179261915075
