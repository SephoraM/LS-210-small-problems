// We are assigned the task to implement a range function that returns an array of
// integers beginning and ending with specified start and end numbers. When only a
// single argument is provided, that argument should be used as the ending number and
// the starting number should be 0.
//
// Check our code below. Why do the the example invocations fail with an error saying
// Maximum call stack size exceeded? Can you fix the code, so it runs without error and
// satisfies the requirements?

// both of these functions have the same name. When range is called, the second range
// function defined is the invoked and it calls itself over and over. there is no
// break condition, so it creates an inifinite loop.

function range(start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  const rangeArr = [];
  let element;
  for (element = start; element <= end; element += 1) {
    rangeArr.push(element);
  }

  return rangeArr;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
