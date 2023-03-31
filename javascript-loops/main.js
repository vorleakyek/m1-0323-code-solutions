/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const number = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    number.push(currentNumber);
    currentNumber++;
  }
  return number;
}

function getEvenNumbersToTwenty() {
  const evenNumber = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumber.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumber;
}

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(number) {
  const doubled = [];
  for (let i = 0; i < number.length; i++) {
    doubled.push(number[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
