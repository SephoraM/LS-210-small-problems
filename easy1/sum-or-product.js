/* Further Exploration:
 */
function computeSum(numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

function computeProduct(numbers) {
  return numbers.reduce((acc, val) => acc * val, 1);
}

function sumOrProduct() {
  const userNumbers = prompt('Please integers greater than 0 separated by a comma: ');
  const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
  const numbers = userNumbers.split(',').map(num => parseInt(num, 10));
  let result;

  if (operation === 's') {
    result = computeSum(numbers);
    console.log(`The sum of the integers ${userNumbers} is ${result}.`);
  } else if (operation === 'p') {
    result = computeProduct(numbers);
    console.log(`The product of the integers ${userNumbers} is ${result}.`);
  } else {
    console.log('That operation does not exist.');
  }
}

sumOrProduct();
