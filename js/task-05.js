function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const body = document.body;
const colorSpan = document.querySelector(".color");

btn.addEventListener("click", () => {
  const color = getRandomHexColor()
  colorSpan.textContent = color;
  body.style.background = color;
})