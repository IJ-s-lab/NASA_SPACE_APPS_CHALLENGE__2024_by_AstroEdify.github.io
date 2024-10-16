const form = document.querySelector('form');
const writeGALAXYInput = document.querySelector('input[type="email"]');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const writeGALAXY = writeGALAXYInput.value;

  if (writeGALAXY === 'GALAXY') {
    window.location.href = 'index2.html';

  } else {
    window.location.href = '404.html';
  }
});
