// Ejercicio 3
// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.

const countriesInfo = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const countriesList = document.createElement('ul');

for (const country of countries) {
  const listItem = document.createElement('li');
  listItem.textContent = country;
  countriesList.appendChild(listItem);
}

document.body.appendChild(countriesList);

document.querySelector('.fn-remove-me').remove();

const carsList = document.createElement('ul');
for (const car of cars) {
  const listItem = document.createElement('li');
  listItem.textContent = car;
  carsList.appendChild(listItem);
}

document.querySelector('[data-function="printHere"]').appendChild(carsList);

const cardsContainer = document.createElement('div');
document.body.appendChild(cardsContainer);

for (const country of countriesInfo) {
  const card = document.createElement('div');
  const title = document.createElement('h4');
  const image = document.createElement('img');
  const removeButton = document.createElement('button');

  title.textContent = country.title;
  image.src = country.imgUrl;
  removeButton.textContent = 'Eliminar';

  removeButton.addEventListener('click', () => {
    card.remove();
  });

  card.appendChild(title);
  card.appendChild(image);
  card.appendChild(removeButton);
  cardsContainer.appendChild(card);
}

const removeLastButton = document.createElement('button');
removeLastButton.textContent = 'Eliminar último';

removeLastButton.addEventListener('click', () => {
  if (cardsContainer.lastElementChild) {
    cardsContainer.lastElementChild.remove();
  }
});

document.body.appendChild(removeLastButton);