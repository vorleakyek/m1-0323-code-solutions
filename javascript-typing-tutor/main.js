const charNodes = document.querySelectorAll('span');
const result = document.querySelector('div.phrase p');
const btn = document.querySelector('button');
let indexPosition = 0;
let totalTypedChar = 0;

document.addEventListener('keydown', keydownHandler);
btn.addEventListener('click', reset);

function keydownHandler(event) {
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

    charNodes[indexPosition].className = addClass;
    totalTypedChar++;

    if (isNextChar === true && indexPosition < charNodes.length - 1) {
      indexPosition++;
      charNodes[indexPosition].classList.add('current');
    } else if (isNextChar === true && indexPosition === charNodes.length - 1) {
      document.removeEventListener('keydown', keydownHandler);
      result.textContent = 'Typing Accuracy: ' + accuracy(totalTypedChar) + '%';
      result.classList.remove('hidden');
      btn.classList.remove('hidden');
    }
  }
}

function accuracy(totalTypedCharPressed) {
  const correctKeyPressed = charNodes.length;
  const accuracy = (correctKeyPressed / totalTypedCharPressed) * 100;
  return accuracy.toFixed(2);
}

function reset(event) {
  result.className = 'result hidden';
  btn.className = 'hidden';
  indexPosition = 0;
  totalTypedChar = 0;
  for (const el of charNodes) {
    el.classList.remove('correct');
  }
  charNodes[0].classList.add('current');
  document.addEventListener('keydown', keydownHandler);
}
