/* exported isAnagram */

function isAnagram(firstString, secondString) {
  const string1 = firstString.replaceAll(' ', '');
  const string2 = secondString.replaceAll(' ', '');
  const string1ArraySort = string1.split('').sort();
  const string2ArraySort = string2.split('').sort();

  if (string1.length !== string2.length) {
    return false;
  }

  for (let i = 0; i < string1.length; i++) {
    if (!string1.includes(string2[i]) || string1ArraySort[i] !== string2ArraySort[i]) {
      return false;
    }
  }
  return true;
}
