const openModalButton = document.querySelector('.btn-1');
const closeModalButton = document.querySelector('.btn-2');
const modal = document.querySelector('.modal');
const background = document.querySelector('.overlay');

openModalButton.addEventListener('click', displayModal);
closeModalButton.addEventListener('click', hideModal);

function displayModal(event) {
  modal.classList.remove('hidden');
  background.classList.remove('hidden');
}

function hideModal(event) {
  modal.classList.add('hidden');
  background.classList.add('hidden');
}
