/* exported flatten */

function flatten(array) {
  const result = [];
  const values = array.values();

  for (const element of values) {
    if (Array.isArray(element)) {
      for (const item of element) {
        result.push(item);
      }
    } else {
      result.push(element);
    }
  }

  return result;
}
