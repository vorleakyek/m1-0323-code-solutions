/* exported sumAll */
function sumAll(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}
