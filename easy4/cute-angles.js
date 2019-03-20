/* Write a function that takes a floating point number representing an angle
between 0 and 360 degrees, and returns a string representing that angle in
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
degrees, a single quote (') to represent minutes, and a double quote (") to
represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute. */

// padding zeroes
// string => string
// takes the string representation of a number and pads with 1 zero if the
// string has a length of 1
function zeroPadding(str, symbol) {
  return str.length === 1 ? `0${str}${symbol}` : `${str}${symbol}`;
}

// remainder of given number is used to calculate the minutes
// remainder of minutes is used to calculate the seconds
// floor the degrees, minutes, seconds
// pad the minutes and the seconds with zeroes if needed
// format the degrees, minutes, seconds and return in string
// number => string
function dms(angl) {
  const angle = angl < 0 ? angl + 360 : angl;
  const minutes = (angle % 1) * 60;
  const seconds = (minutes % 1) * 60;
  const formattedDegrees = String(Math.floor(angle)) + String.fromCharCode(176);
  const formattedMinutes = zeroPadding(String(Math.floor(minutes)), "'");
  const formattedseconds = zeroPadding(String(Math.floor(seconds)), '"');

  return formattedDegrees + formattedMinutes + formattedseconds;
}

// if given negative number

// Examples:

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
/* Note: your results may differ slightly depending on how you round values,
but should generally be within a second or two of the results shown. */
