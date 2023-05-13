const inputs = document.querySelector('#contact-form');

inputs.addEventListener('submit', function (event) {
  event.preventDefault();
  const inputsData = {
    name: inputs.elements.name.value,
    email: inputs.elements.email.value,
    message: inputs.elements.message.value
  };
  console.log('data from users:', inputsData);
  inputs.reset();
});
