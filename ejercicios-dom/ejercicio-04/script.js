// Ejercicio 4
// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const button = document.querySelector('#btnToClick');
const focusInput = document.querySelector('.focus');
const valueInput = document.querySelector('.value');

button.addEventListener('click', (event) => {
  console.log(event);
});

focusInput.addEventListener('focus', (event) => {
  console.log(event.target.value);
});

valueInput.addEventListener('input', (event) => {
  console.log(event.target.value);
});