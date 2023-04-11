/* exported chunk */

function chunk(array, size) {
  const result = [];
  const totalSub = array.length / size;
  let breakpt = size;
  let subArr = [];
  const NumRemaining = array.length - array.length % size;
  if (array.length % size === 0) {
    for (let n = 0; n < totalSub; n++) {
      const m = n * size;
      for (let i = m; i < breakpt; i++) {
        subArr.push(array[i]);
      }
      breakpt += size;
      result.push(subArr);
      subArr = [];
    }
  } else {
    for (let n = 0; n < totalSub - 1; n++) {
      const m = n * size;
      for (let i = m; i < breakpt; i++) {
        subArr.push(array[i]);
      }
      breakpt += size;
      result.push(subArr);
      subArr = [];
    }
    for (let i = array.length - 1; i >= NumRemaining; i--) {
      subArr.push(array[i]);
    }
    result.push(subArr);
  }
  return result;
}
