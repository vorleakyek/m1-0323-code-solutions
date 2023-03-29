/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  let result = null;
  if (number < 5) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isEven(number) {
  let result = null;
  if (number % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function startsWithJ(string) {
  let result = null;
  if (string[0] === 'J') {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrink(person) {
  let result = null;
  if (person.age >= 21) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrive(person) {
  let result = null;
  if (person.age >= 16) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  let result = null;
  if (pH >= 0 && pH < 7) {
    result = 'acid';
  } else if (pH === 7) {
    result = 'neutral';
  } else if (pH > 7 && pH <= 14) {
    result = 'base';
  } else {
    result = 'invalid pH level';
  }
  return result;
}

// Are we allow to use the 'return' statement?
function introduceWarnerBro(name) {
  let result = '';
  switch (name) {
    case 'dot':
      result = 'I\'m cute~';
      break;
    case 'yakko':
    case 'wakko':
      result = 'We\'re the warner brothers!';
      break;
    default:
      result = 'Goodnight everyone!';
  }
  return result;
}

function recommendMovie(genre) {
  let result = '';
  switch (genre) {
    case 'action':
      result = 'Enter the Dragon';
      break;
    case 'comedy':
      result = 'Groundhog Day';
      break;
    case 'horror':
      result = 'Coraline';
      break;
    case 'drama':
      result = 'Emma';
      break;
    case 'musical':
      result = 'Mary Poppins';
      break;
    case 'sci-fi':
      result = 'Avatar';
      break;
    default:
      result = 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
  return result;
}
