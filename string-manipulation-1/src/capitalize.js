/* exported capitalize */

function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  let remainingLetters = '';
  for (let i = 1; i < word.length; i++) {
    remainingLetters += word[i].toLowerCase();
  }
  return firstLetter + remainingLetters;
}
