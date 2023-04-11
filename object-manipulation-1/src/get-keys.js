/* exported getKeys */
function getKeys(object) {
  const arrKey = [];
  for (const key in object) {
    arrKey.push(key);
  }
  return arrKey;
}
