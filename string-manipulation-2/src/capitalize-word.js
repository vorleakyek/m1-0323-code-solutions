/* exported capitalizeWord */
function capitalizeWord(word) {

  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  const result = word[0].toUpperCase() + word.slice(1).toLowerCase();

  return result;
}
