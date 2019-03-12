/* Write a function that will take a short line of text, and write it to the
console log within a box. */

/* Further Exploration
Modify this function so that it truncates the message if it doesn't fit inside
a maximum width provided as a second argument (the width is the width of the box
itself). You may assume no maximum if the second argument is omitted. For a real
challenge, try word wrapping messages that are too long to fit, so that they
appear on multiple lines but are still contained within the box. */

function createRow(width, start, end, fill) {
  let row = start;

  for (let i = 0; i < width; i += 1) {
    row += fill;
  }
  row += end;

  return row;
}

function splitString(string, width, stringLength) {
  const strings = [];
  let decremter = stringLength;
  let firstIndex = 0;
  let secondIndex = width;

  while (decremter > 0) {
    strings.push(string.slice(firstIndex, secondIndex));

    firstIndex += width;
    secondIndex += width;

    decremter -= width;
  }

  return strings;
}

function createStringRow(width, string, start, end, fill) {
  let stringRow = start;
  const stringLength = string.length;
  const firstHalf = Math.ceil((width - stringLength) / 2);
  const secondHalf = Math.floor((width - stringLength) / 2);

  if (width > stringLength) {
    stringRow += createRow(firstHalf, '', '', fill);
    stringRow += string;
    stringRow += createRow(secondHalf, '', '', fill);
  } else {
    stringRow += string;
  }
  stringRow += end;

  return stringRow;
}

// string => undefined
function logInBox(string, width = string.length + 4) {
  const innerWidth = width - 4;
  const borderRow = createRow(innerWidth, '+-', '-+', '-');
  const paddingRow = createRow(innerWidth, '| ', ' |', ' ');
  const stringRow = createStringRow(innerWidth, string, '| ', ' |', ' ');

  console.log(borderRow);
  console.log(paddingRow);

  if (innerWidth < string.length) {
    const substrings = splitString(string, innerWidth, string.length);
    substrings.forEach((substring) => {
      console.log(createStringRow(innerWidth, substring, '| ', ' |', ' '));
    });
  } else {
    console.log(stringRow);
  }

  console.log(paddingRow);
  console.log(borderRow);
}

// Examples:

logInBox('To boldly go where no one has gone before.');
/* will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/

logInBox('To boldly go where no one has gone before.', 50);
logInBox('To boldly go where no one has gone before.', 20);
logInBox('', 20);

logInBox('');
/*
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window. */
