/* exported numVowels */
function numVowels(string) {
  const stringLowerCase = string.toLowerCase();
  let totalVowels = 0;
  for (let i = 0; i < string.length; i++) {
    if (stringLowerCase[i] === 'a' || stringLowerCase[i] === 'e' || stringLowerCase[i] === 'i' || stringLowerCase[i] === 'o' || stringLowerCase[i] === 'u') {
      totalVowels++;
    }
  }
  return totalVowels;
}
