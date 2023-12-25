'use strict';

const submit = document.querySelector('#submit');

submit.addEventListener('click', submitClick, false);

function submitClick(event) {
  const myForm = document.getElementById('myForm');

  if (myForm.checkValidity()) {
    const warn = 'Your message has been received! Thanks for getting in touch!';

    document.getElementById('output-box').innerHTML += warn;

    event.preventDefault();
  }

  myForm.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
