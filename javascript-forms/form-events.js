function handleFocus(event) {
  console.log('focus event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('value of name: ', event.target.value);
}

const inputs = document.querySelector('#contact-form').elements;

for (let i = 0; i < 3; i++) {
  inputs[i].addEventListener('focus', handleFocus);
  inputs[i].addEventListener('blur', handleBlur);
  inputs[i].addEventListener('input', handleInput);
}
