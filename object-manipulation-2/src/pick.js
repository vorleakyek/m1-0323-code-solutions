/* exported pick */

function pick(source, keys) {
  const resultObj = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      resultObj[key] = source[key];
    }
  }
  return resultObj;
}
