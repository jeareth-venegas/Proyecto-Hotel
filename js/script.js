/* eslint-disable no-shadow */
const enlaces = document.querySelectorAll('.tabs-menu');

const contenido = document.querySelectorAll('.tab-content');

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
