/* exported defaults */

/**
 *
 * PSEUDEOCODE:
 *
 * Define a function named 'defualts' that takes two arguments, 'target' and 'source'.
 *  Declare a variable named 'targetKeys', and assigned it to the array with all the list of properties in the 'target' object.
 *  Begin a loop that iterates through each of the key property in the 'source' object, where
 *    For each key property in the 'source' object,
 *        If the value of the current key is not including in the 'targetKeys' array, then
 *          Set the property of the 'target' object using the current key value, and assigned it to the value of the 'source' object at the current key.
 *
 **/

function defaults(target, source) {
  const targetKeys = Object.keys(target);
  for (const key in source) {
    if (!targetKeys.includes(key)) {
      target[key] = source[key];
    }
  }
}
