/* exported capitalizeWords */

function capitalizeWords(string) {
  const arrayOfWords = string.split(' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    const editWordFirstChar = arrayOfWords[i][0].toUpperCase();
    const editWordRemaingChar = arrayOfWords[i].slice(1).toLowerCase();
    arrayOfWords[i] = editWordFirstChar + editWordRemaingChar;
  }
  return arrayOfWords.join(' ');

}
