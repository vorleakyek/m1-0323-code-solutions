/* exported truncate */
function truncate(length, string) {
  let truncatedString = '';

  if (string === '') {
    truncatedString = '...';
  } else if (string.length >= length) {
    for (let i = 0; i < length; i++) {
      truncatedString += string[i];
    }
    truncatedString = truncatedString + '...';
  } else {
    truncatedString = string + '...';
  }

  return truncatedString;

}
