const student = {
  firstName: 'Vorleak',
  lastName: 'Yek',
  age: 29
};

const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Teacher Assistant';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

const vehicle = {
  make: 'Toyota',
  model: 'Scion',
  year: 2019
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet = {
  name: 'Luke',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
