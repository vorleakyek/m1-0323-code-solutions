/* exported isLowerCased */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    console.log(word[i]);

    if (word[i] === '-') {
      continue;
    }

    if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
