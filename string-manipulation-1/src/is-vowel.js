/* exported isVowel */
function isVowel(character) {
  const char = character.toUpperCase();
  if (char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
