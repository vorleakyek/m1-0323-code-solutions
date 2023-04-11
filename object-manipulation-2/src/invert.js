/* exported invert */

function invert(source) {
  const obj = {};
  for (const key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
