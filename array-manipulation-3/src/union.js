/* exported union */

function union(first, second) {

  const result = [];
  const firstLength = first.length;
  const secondLength = second.length;

  for (let i = 0; i < firstLength; i++) {
    if (!result.includes(first[i])) {
      result.push(first[i]);
    }
  }

  for (let i = 0; i < secondLength; i++) {
    if (!result.includes(second[i])) {
      result.push(second[i]);
    }
  }

  return result;

}
