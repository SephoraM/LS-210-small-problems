// We have been asked to implement a function that determines whether or not a given word is
// a reserved keyword. We wrote the isReserved function below along with some test cases, but
// we aren't seeing the expected result. Why not? Fix the code so that it behaves as intended.

// the reason it wasn't working is because you cannot return an expression from within
// a forEach. There were several different ways to fix the code but I decided to simply
// use a variable to store a boolean value which would be reassigned within the forEach
// if the condition was true.

const RESERVED_KEYWORDS = [
  'break',
  'case',
  'catch',
  'class',
  'const',
  'continue',
  'debugger',
  'default',
  'delete',
  'do',
  'else',
  'enum',
  'export',
  'extends',
  'finally',
  'for',
  'function',
  'if',
  'implements',
  'import',
  'in',
  'instanceof',
  'interface',
  'let',
  'new',
  'package',
  'private',
  'protected',
  'public',
  'return',
  'static',
  'super',
  'switch',
  'this',
  'throw',
  'try',
  'typeof',
  'var',
  'void',
  'while',
  'with',
  'yield',
];

function isReserved(name) {
  let reservedBool = false;

  RESERVED_KEYWORDS.forEach((reserved) => {
    if (name === reserved) {
      reservedBool = true;
    }
  });

  return reservedBool;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch')); // false
console.log(isReserved('switch')); // should be: true
