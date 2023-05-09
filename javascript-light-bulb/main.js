const lightBulb = document.querySelector('.circle');
const background = document.querySelector('.container');
lightBulb.addEventListener('click', handleClick);

function handleClick(event) {
  if (lightBulb.className === 'circle light' && background.className === 'container bg-light') {
    lightBulb.classList.replace('light', 'dark');
    background.classList.replace('bg-light', 'bg-dark');

    setTimeout(() => {
      lightBulb.classList.add('delay');
    }, 500);
  } else if (
    lightBulb.className === 'circle dark delay' && background.className === 'container bg-dark') {
    lightBulb.className = 'circle light';
    background.classList.replace('bg-dark', 'bg-light');
  }

}
