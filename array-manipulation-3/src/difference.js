/* exported difference */

function difference(first, second) {
  const result = [];
  const firstLength = first.length;
  const secondLength = second.length;

  for (let i = 0; i < firstLength; i++) {
    if (!second.includes(first[i]) && !result.includes(first[i])) {
      result.push(first[i]);
    }
  }

  for (let i = 0; i < secondLength; i++) {
    if (!first.includes(second[i]) && !result.includes(second[i])) {
      result.push(second[i]);
    }
  }

  return result;
}
