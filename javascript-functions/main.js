function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greeting(name) {
  return 'Hey, ' + name;
}
const greetingResult = greeting('Vorleak');
console.log(greetingResult);

function getArea(width, height) {
  return width * height;
}
const getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}
const getFirstNameResult = getFirstName({ firstName: 'Leonardo', lastName: 'da Vinci' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}
const getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
