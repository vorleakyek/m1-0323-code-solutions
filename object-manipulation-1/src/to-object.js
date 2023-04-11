/* exported toObject */

/**
 * PSEUDOCODE:
 *
 * Define a function named 'toObject' that takes one arguement,'keyValuePair'.
 *  Declare a variable named 'obj', and assigned it to an empty object.
 *  Set the property of the 'obj' object using the value of the first element of the 'keyValuePair' array, and then
 *  Assign it to the value of the second element of the 'keyValuePair' array.
 * Return the value of the 'obj' variable.
 *
 **/

function toObject(keyValuePair) {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
