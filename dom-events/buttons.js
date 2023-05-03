function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}

const firstButton = document.querySelector('.click-button');
firstButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

const secondButton = document.querySelector('.hover-button');
secondButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event target', event.target);
}

const thirdButton = document.querySelector('.double-click-button');
thirdButton.addEventListener('dblclick', handleDoubleClick);
