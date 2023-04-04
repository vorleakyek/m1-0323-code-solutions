/* exported filterOutNulls */
function filterOutNulls(values) {
  const noNull = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      noNull.push(values[i]);
    }
  }
  return noNull;
}
