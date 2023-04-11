/* exported takeRight */
function takeRight(array, count) {
  if (count <= array.length) {
    return array.slice(array.length - count);
  } else {
    return array;
  }
}
