/* exported unique */

function unique(array) {
  const result = [];

  for (const element of array) {
    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}
