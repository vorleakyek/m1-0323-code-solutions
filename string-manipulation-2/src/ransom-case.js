/* exported ransomCase */
function ransomCase(string) {
  let result = string[0].toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }
  return result;
}
