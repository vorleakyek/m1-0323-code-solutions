/* exported includes */

/**
 * PSEUDOCODE:
 *
 * Define a function named 'includes' that takes two arguments, 'array' and 'value'.
 * Define a loop that iterates through the 'array' array, where
 *  For each index in the array:
 *    Decide if the value of the current element has the same data type and has the same value as the 'value' variable.
 *      Return true for the first time it encounters the match.
 *  Return false if no match is found.
 **/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
