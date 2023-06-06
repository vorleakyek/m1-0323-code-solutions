/* exported zip */

function zip(first, second) {
  let arrLength = 0;
  const result = [];
  if (first.length > second.length) {
    arrLength = second.length;
  } else {
    arrLength = first.length;
  }

  for (let i = 0; i < arrLength; i++) {
    const subArr = [];
    subArr.push(first[i], second[i]);
    result.push(subArr);
  }

  return result;

}
