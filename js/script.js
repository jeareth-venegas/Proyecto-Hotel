/* eslint-disable no-shadow */

const links = document.querySelectorAll('tabs-menu');
const content = document.querySelectorAll('tab-content');

for (let i = 0; i < content.lenght; i++) {
  content[i].classList.add('js-contenido-oculto');
}

content[0].classList.remove('js-contenido-oculto');
links[0].classList.add('js-activo');

for (let i = 0; i < links.lenght; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);
    for (let i = 0; i < content.lenght; i++) {
      content[i].classList.add('js-contenido-oculto');
      if (content[i].getAttribute('id') === id) {
        content[i].classList.remove('js-contenido-oculto');
      }
    }
    for (let i = 0; i < links.lenght; i++) {
      links[i].classList.remove('js-activo');
    }
    event.currentTarget.classList.add('js-activo');
  });
}
