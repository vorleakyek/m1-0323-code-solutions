let numClick = 0;
const button = document.querySelector('.hot-button');
const count = document.querySelector('.click-count');

button.addEventListener('click', clickhandler);

function clickhandler(event) {
  numClick++;
  count.textContent = numClick;

  if (numClick < 4) {
    button.className = 'hot-button cold';
  } else if (numClick < 7) {
    button.className = 'hot-button cool';
  } else if (numClick < 10) {
    button.className = 'hot-button tepid';
  } else if (numClick < 13) {
    button.className = 'hot-button warm';
  } else if (numClick < 16) {
    button.className = 'hot-button hot';
  } else {
    button.className = 'hot-button nuclear';
  }
}
