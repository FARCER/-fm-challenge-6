svg4everybody();

function formValidate() {
  const form = document.querySelector('form');
  const label = document.querySelector('label');
  const input = document.querySelector('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateEmail(input.value)) {
      label.classList.remove('error');
    } else {
      label.classList.add('error');
    }


  })
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function logo() {
  const logo = document.querySelector('.logo');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const width = window.innerWidth;

  if (width < 1000) {
    header.append(logo);
  } else {
    main.prepend(logo);
  }

}

window.addEventListener('resize', () => {
  logo();
})


logo()
formValidate();
