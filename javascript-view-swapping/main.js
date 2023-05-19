const tabContainer = document.querySelector('.tab-container');
const tabElements = document.querySelectorAll('.tab');
const viewElements = document.querySelectorAll('.view');

tabContainer.addEventListener('click', clickHandler);

function clickHandler(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < tabElements.length; i++) {
      if (event.target === tabElements[i]) {
        tabElements[i].className = 'tab active';
      } else {
        tabElements[i].className = 'tab';
      }
    }

    const dataViewValue = event.target.getAttribute('data-view');
    for (let i = 0; i < viewElements.length; i++) {
      if (dataViewValue === viewElements[i].getAttribute('data-view')) {
        viewElements[i].className = 'view';
      } else {
        viewElements[i].className = 'view hidden';
      }
    }
  }
}
