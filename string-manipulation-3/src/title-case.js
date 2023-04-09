/* exported titleCase */

function titleCase(title) {
  const titleLC = title.toLowerCase();
  let titleAPA = titleLC;

  if (titleLC.includes('javascript') || titleLC.includes('api')) {
    titleAPA = titleLC.replaceAll('javascript', 'JavaScript').replaceAll('api', 'API');
  }

  const arrayWords = titleAPA.split(' ');
  const firstWord = arrayWords[0][0].toUpperCase() + arrayWords[0].slice(1);
  const arrayResult = [firstWord];
  const regex = /\b(?:and|or|nor|but|a|an|the|as|at|by|for|in|of|on|per|to)\b/;

  for (let i = 1; i < arrayWords.length; i++) {
    if (arrayWords[i].includes('-')) {
      const index = arrayWords[i].indexOf('-');
      arrayResult.push(arrayWords[i][0].toUpperCase() + arrayWords[i].slice(1, index + 1) + arrayWords[i][index + 1].toUpperCase() + arrayWords[i].slice(index + 2));
      continue;
    }

    if (arrayWords[i].length < 4 && !arrayWords[i - 1].includes(':') && regex.test(arrayWords[i])) {
      arrayResult.push(arrayWords[i]);
    } else {
      arrayResult.push(arrayWords[i][0].toUpperCase() + arrayWords[i].slice(1));
    }
  }

  titleAPA = arrayResult.join(' ');

  return titleAPA;

}
