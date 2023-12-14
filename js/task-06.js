function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
createBtn.style.backgroundColor = '#4E75FF';
destroyBtn.style.backgroundColor = '#FF4E4E';

createBtn.addEventListener('mouseover', () => {
  createBtn.style.backgroundColor = '#6C8CFF';
});

createBtn.addEventListener('mouseout', () => {
  createBtn.style.backgroundColor = '#4E75FF';
});

destroyBtn.addEventListener('mouseover', () => {
  destroyBtn.style.backgroundColor = '#FF7070';
});

destroyBtn.addEventListener('mouseout', () => {
  destroyBtn.style.backgroundColor = '#FF4E4E';
});

function createBoxes() {
  const amount = input.valueAsNumber;

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  destroyBoxes();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }

  input.value = ''; 
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}