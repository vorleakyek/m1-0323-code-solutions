/* exported getValues */

function getValues(object) {
  const arrVal = [];
  for (const key in object) {
    arrVal.push(object[key]);
  }
  return arrVal;
}
