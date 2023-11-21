import '../scss/app.scss';

console.log('start');

document.querySelectorAll('button').forEach((el) => el.addEventListener('click', () => {
  console.log('clicked');
  console.log('clicked 2');
}));
