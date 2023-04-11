/* exported compact */

/**
 * PSEUDOCODE:
 *
 * Define a function named 'compact' that accepts one argument, 'array'.
 *  Declare a variable named 'result', and assign it to an empty array.
 *  Begin a loop that iterates through the 'array' array, where
 *    For each index in the array:
 *      Decide if the value of the element at the current index is falsy or truthy.
 *      If the value is truthy, append it to the array named 'result'.
 *    Return the value of the 'result' variable.
 **/

function compact(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }
  return result;
}
