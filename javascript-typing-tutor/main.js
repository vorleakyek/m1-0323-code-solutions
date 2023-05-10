const charNodes = document.querySelectorAll('span');

let indexPosition = 0;
charNodes[indexPosition].classList.add('current');

document.addEventListener('keydown', function keydownHandler(event) {

  if (indexPosition < charNodes.length) {
    const currentChar = charNodes[indexPosition].textContent;
    let addClass;
    let isNextChar = false;

    if (event.key === currentChar) {
      addClass = 'correct';
      isNextChar = true;
    } else {
      addClass = 'incorrect';
    }

    charNodes[indexPosition].className = 'current ' + addClass;

    if (isNextChar === true && indexPosition < charNodes.length - 1) {
      indexPosition++;
      charNodes[indexPosition].classList.add('current');
    } else if (isNextChar === true && indexPosition === 29) {
      charNodes[indexPosition].className = 'correct';
      document.removeEventListener('keydown', keydownHandler);

    }
  }

});
