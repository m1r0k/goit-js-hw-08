function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyColor = document.querySelector(".change-color");

bodyColor.addEventListener('click', () => {
  const bodyChange = document.querySelector ('body');
  const spanColor = document.querySelector('.color');
  const randomColor = getRandomHexColor();

  bodyChange.style.backgroundColor = randomColor;

  spanColor.textContent = randomColor;
});