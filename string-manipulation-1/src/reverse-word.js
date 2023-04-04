/* exported reverseWord */

/**
PSEUDOCODE:

Define a function, named 'reverseWord', that accepts one argument, 'word'.
  Declare a variable named 'result', and assigned it to an empty string.
  Begin a loop that iterates through the string 'word' from the last character to the first character of the string, where
    For each character in the string:
      Add the value of the current character to the 'result' variable.
  Return the value of the 'result' variable.
**/

function reverseWord(word) {
  let result = '';
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i];
  }
  return result;
}
