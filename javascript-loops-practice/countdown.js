/* exported countdown */
function countdown(number) {
  const count = [];
  for (let i = number; i >= 0; i--) {
    count.push(i);
  }
  return count;
}
