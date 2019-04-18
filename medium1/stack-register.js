// A stack is a list of values that grows and shrinks dynamically. A stack may be
// implemented as an Array that uses two Arraymethods: Array.prototype.push and
// Array.prototype.pop.
//
// A stack-and-register programming language is a language that uses a stack of values.
// Each operation in the language operates on a register, which can be thought of as
// the current value. The register is not part of the stack. An operation that requires
// two values pops the topmost item from the stack (i.e., the operation removes the most
// recently pushed value from the stack), operates on the popped value and the register
// value, and stores the result back in the register.
//
// Consider a MULT operation in a stack-and-register language. It multiplies the stack
// value with the register value, removes the value from the stack, and stores the result
// back in the register. For example, if we start with a stack of [3, 6, 4] (where 4is
// the topmost item in the stack) and a register value of 7, the MULT operation transforms
// the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is
// left in the register. If we do another MULT at this point, the stack is transformed to
// [3], and the register is left with the value 168.
//
// Write a function that implements a miniature stack-and-register-based programming language
// that has the following commands(also called operations or tokens):
//
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in
// the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result
// in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result
// in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer
// result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer
// remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.
// All operations are integer operations (which is only important with DIV and MOD).
//
// Programs will be supplied to your language function via a string argument. Your function may
// assume that all arguments are valid programs — i.e., they will not do anything like trying to pop
// a non-existent value from the stack, and they will not contain any unknown tokens.
//
// Initialize the stack and register to the values [] and 0, respectively.

// input: string of commands
// output: return undefined -- function has side effects
// side effects: perform operations on stack and register based on the given string.
// questions:
// - will all the n values be integers?
// - can I assume that I only have to consider the test suite to be complete?
// - in regards to the commands, should I consider letter case or assume they will be upper?
// --- assume the test suite is complete and all commads are uppercase, integers only.
// rules:
// Initialize the stack and register to the values [] and 0, respectively.
// must create functionality for each of the listed commands
// assume all programs are valid
// data structure: array, object
// create an object which stores the commands as keys and their operations as values

// operations:
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in
// the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result
// in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result
// in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer
// result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer
// remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
const operations = {
  ADD: (register, stack) => register + stack.pop(),
  SUB: (register, stack) => register - stack.pop(),
  MULT: (register, stack) => register * stack.pop(),
  DIV: (register, stack) => Math.floor(register / stack.pop()),
  MOD: (register, stack) => Math.floor(register % stack.pop()),
  POP: (register, stack) => stack.pop(),
  PUSH: (register, stack) => {
    stack.push(register);
    return register;
  },
};

// split the command string into its token elements
// create and initialize the stack
// create and initialize the register
// iterate over each token
// - if the element is an integer
//   - assign to the register
// - else if the token is 'PRINT'
//   - log the value in register
// - else
//   - use the token as a key to access the operation required passing in the register
//     and the stack
//   - place appropriate result in register
// the function implicitly returns undefined

// account for within minilang function:
// PRINT : Print the register value.

// Refactor the minilang function to include some error handling. In particular, the
// function should detect and report empty stack conditions, and invalid tokens in the
// program. Ideally, the function should return an error message if an error occurs, or
// undefined if the program runs successfully.

const minilang = (commandString) => {
  const stack = [];
  let register = 0;
  let returnValue;

  commandString.split(' ').forEach((token) => {
    if (String(Number(token)) === token) {
      register = parseInt(token, 10);
    } else if (typeof operations[token] === 'function') {
      if (token !== 'PUSH' && stack.length === 0) {
        returnValue = 'Invalid use of Operator!';
      } else {
        register = operations[token](register, stack);
      }
    } else if (token === 'PRINT') {
      console.log(register);
    } else {
      returnValue = 'Invalid command!';
    }
  });

  return returnValue;
};

// Examples:

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

// valid
console.log(minilang('6 PUSH POP'));

// error invalid command
console.log(minilang('6 PULL'));

// error invalid operation on stack
console.log(minilang('POP'));
