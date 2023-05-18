const parentUl = document.querySelector('.task-list');
parentUl.addEventListener('click', clickHandler);

function clickHandler(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);

  if (event.target.nodeName === 'BUTTON') {
    const closestEl = event.target.closest('.task-list-item');
    console.log('closes .task-list-item', closestEl);
    closestEl.remove();
  }
}
