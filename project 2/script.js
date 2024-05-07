const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const direction = document.getElementById('direction');
const preview = document.querySelector('.preview');

function setGradient() {
  preview.style.background = `linear-gradient(${direction.value}, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
direction.addEventListener('change', setGradient);

setGradient(); 
