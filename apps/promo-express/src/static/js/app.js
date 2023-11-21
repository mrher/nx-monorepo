import '../scss/app.scss';

document.querySelectorAll('button').forEach((el) => el.addEventListener('click', () => {
  console.log('clicked');
  console.log('clicked 2');
}));
