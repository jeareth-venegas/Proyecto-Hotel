/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */

const enlaces = document.querySelectorAll('.tabs-menu');
const contenido = document.querySelectorAll('.tab-content');

// Variables que obtinenen los enlaces de miniaturas y el div contenedor con la imagen en grande
const links = document.querySelectorAll('.miniature');
const bigImage = document.getElementById('bigImage');

for (let i = 0; i < contenido.length; i++) {
  contenido[i].classList.add('js-content-hidden');
}

contenido[0].classList.remove('js-content-hidden');
enlaces[0].classList.add('js-active');

for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', (event) => {
    event.preventDefault();
    const elemento = event.currentTarget;
    const href = elemento.getAttribute('href');
    const id = href.substring(1);
    for (let i = 0; i < contenido.length; i++) {
      contenido[i].classList.add('js-content-hidden');
      if (contenido[i].getAttribute('id') === id) {
        contenido[i].classList.remove('js-content-hidden');
      }
    }
    for (let i = 0; i < enlaces.length; i++) {
      enlaces[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active');
  });
}

// Funcion principal de la Galeria
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();
    const url = event.currentTarget.getAttribute('src');
    bigImage.src = `${url}`;
    for (let i = 0; i < links.length; i++) {
      links[i].classList.add('img-content-hidden');
      if (links[i].getAttribute('src') === url) {
        links[i].classList.remove('img-content-hidden');
      }
    }
    for (let i = 0; i < bigImage.length; i++) {
      bigImage[i].classList.remove('img-active');
    }
    event.currentTarget.classList.add('img-active');
  });
}
