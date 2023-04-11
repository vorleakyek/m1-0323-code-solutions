/* exported swapChars */

/**
 * PSEUDOCODE:
 *
 * Define a function, named 'swapChars', that accepts three arguments, 'firstIndex', 'secondIndex', and 'string'.
 *  Declare a variable named 'substring1' and assigned to it the concatination of these two strings:
 *   substring of the orginal string from character at index 0 all the way to but not including the character at index 'firstIndex'
 *   character of the string at 'secondIndex'.
 *  Declare a variable named 'substring2' and assigned to it the concatination of these two strings:
 *   substring of the original string from character at index 'firstIndex+1' all the way to but not including the character at index 'secondIndex'
 *   character of the string at 'firstIndex'
 *  Declare a variable named 'substring3' and assigned to it:
 *   substring of the orginal string from character at index 'secondIndex +1" all the way to the last character of the string.
 *  Return the result of the three strings concatination:
 *    substring1 + substring2 + substring3.
 *
**/
function swapChars(firstIndex, secondIndex, string) {
  const substring1 = string.slice(0, firstIndex) + string[secondIndex];
  const substring2 = string.slice(firstIndex + 1, secondIndex) + string[firstIndex];
  const substring3 = string.slice(secondIndex + 1);
  return substring1 + substring2 + substring3;
}
