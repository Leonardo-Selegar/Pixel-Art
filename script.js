const pai = document.getElementById('pixel-board');
const paiPaleta = document.getElementById('color-palette');
const input = document.querySelector("#board-size");
console.log(input);
const btnSize = document.getElementById('generate-board');

let tamanhoTotal = 25;
let tamnhoDigitado = 5;

const pixeis = document.getElementsByClassName('pixel');
const botaoReseta = document.getElementById('clear-board');

const elemento0 = document.getElementsByClassName('color')[0];
elemento0.classList.add('cor0');

const elemento1 = document.getElementsByClassName('color')[1];
elemento1.classList.add('cor1');

const elemento2 = document.getElementsByClassName('color')[2];
elemento2.classList.add('cor2');

const elemento3 = document.getElementsByClassName('color')[3];
elemento3.classList.add('cor3');

function criaPixels(tamanhoTotal) {
  for (let index = 0; index < tamanhoTotal; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.classList.add('pixels');
    pai.appendChild(pixel);
    pai.style.maxHeight = tamanhoTotal/tamnhoDigitado * 40 + 'px';
    pai.style.width = tamanhoTotal/tamnhoDigitado * 46 + 'px';
  }
}
criaPixels(tamanhoTotal);

window.onload = function () {
  const corInicial = document.getElementsByClassName('color')[0];
  corInicial.classList.add('selected');
};

function classeSelected(event) {
  const classSelect = document.getElementsByClassName('selected')[0];
  classSelect.classList.remove('selected');

  const addClasse = event.target;
  addClasse.classList.add('selected');
}

function colocaCor(event) {
  const colorSelected = document.getElementsByClassName('selected')[0];
  if (colorSelected.classList.contains('cor0') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = 'black';
  } else if (colorSelected.classList.contains('cor1') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = 'red';
  } else if (colorSelected.classList.contains('cor2') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = 'blue';
  } else if (colorSelected.classList.contains('cor3') === true) {
    const pixelCor = event.target;
    pixelCor.style.backgroundColor = 'green';
  }
}

function resetaCores() {
  for (let index = 0; index < tamanhoTotal; index += 1) {
    pixeis[index].style.backgroundColor = 'white';
  }
}

paiPaleta.addEventListener('click', classeSelected);
pai.addEventListener('click', colocaCor);
botaoReseta.addEventListener('click', resetaCores);

