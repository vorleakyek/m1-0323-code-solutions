/* exported reverseWords */
function reverseWords(string) {
  const arrayWords = string.split(' ');
  const arrayResult = [];

  for (let i = 0; i < arrayWords.length; i++) {
    let str = '';
    for (let k = arrayWords[i].length - 1; k >= 0; k--) {
      str += arrayWords[i][k];
    }
    arrayResult.push(str);
  }

  return arrayResult.join(' ');
}
