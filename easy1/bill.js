/* Create a simple tip calculator. The program should prompt for a bill amount
and a tip rate. The program must compute the tip, and then log both the tip and
the total amount of the bill to the console. You can ignore input validation
and assume that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
*/

function calculateTip() {
  const bill = parseFloat(prompt('What is the bill?'));
  const tipRate = parseFloat(prompt('What is the tip percentage?'));

  const tipAmount = (bill * (tipRate / 100)).toFixed(2);
  const totalBill = (bill + parseFloat(tipAmount)).toFixed(2);

  console.log(`The tip is ${tipAmount}`);
  console.log(`The total is ${totalBill}`);
}

calculateTip();
