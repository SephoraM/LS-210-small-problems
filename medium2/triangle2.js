// A triangle is classified as follows:
//
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees, and
// every angle must be greater than 0. If either of these conditions is not satisfied,
// the triangle is invalid.
//
// Write a function that takes the three angles of a triangle as arguments, and returns
// one of the following four strings representing the triangle's classification:
// 'right', 'acute', 'obtuse', or 'invalid'.
//
// You may assume that all angles have integer values, so you do not have to worry
// about floating point errors. You may also assume that the arguments are in degrees.

// input: three integers which are the angles of a triangle
// output: string denoting the type of triangle based on angle or invalid if not a valid triangle
// rules:
// valid:
// - the sum of the angles is 180
// - no angle is 0
// Right: One angle is a right angle (exactly 90 degrees). - the largest is 90
// Acute: All three angles are less than 90 degrees. - the largest is less than 90
// Obtuse: One angle is greater than 90 degrees. - the largest is greater than 90
// data structures: Math object, number
// algorithm:
// if the sum of all angles is not 180 || the smallest angle is 0 return 'invalid'
// if the largest angle is 90 return 'right'
// if the largest angle is less than 90 return 'acute'
// otherwise, return 'obtuse'

const triangle = (angle1, angle2, angle3) => {
  if (Math.min(angle1, angle2, angle3) === 0 || angle1 + angle2 + angle3 !== 180) return 'invalid';
  if (Math.max(angle1, angle2, angle3) === 90) return 'right';
  if (Math.max(angle1, angle2, angle3) < 90) return 'acute';
  return 'obtuse';
};

// Examples:

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
