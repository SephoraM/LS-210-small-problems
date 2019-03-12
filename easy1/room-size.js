/* Build a program that asks a user for the length and width of a room in
meters, and then logs to the console the area of the room in both square
meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the prompt() function
to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/

function roomSize() {
  const SQMETER_TO_SQFEET = 10.7639;
  let squareMeters;
  let squareFeet;

  const type = prompt('Are you providing measurements in meters or feet? (m/f)');
  const length = parseInt(prompt('Enter the length of the room in meters:'), 10);
  const width = parseInt(prompt('Enter the width of the room in meters:'), 10);

  if (type === 'f') {
    squareFeet = length * width;
    squareMeters = (squareFeet / SQMETER_TO_SQFEET).toFixed(2);
  } else {
    squareMeters = length * width;
    squareFeet = (squareMeters * SQMETER_TO_SQFEET).toFixed(2);
  }

  console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);
}

roomSize();
