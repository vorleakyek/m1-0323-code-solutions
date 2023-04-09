/* exported isPalindromic */

function isPalindromic(string) {
  const noSpaces = string.replaceAll(' ', '');
  let reverseString = '';
  for (let i = noSpaces.length - 1; i >= 0; i--) {
    reverseString += noSpaces[i];
  }

  if (reverseString === noSpaces) {
    return true;
  } else {
    return false;
  }

}
