// Ejercicio 5
// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo
// posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsList = document.querySelector('#albums-list');

for (const album of albums) {
  const listItem = document.createElement('li');
  listItem.textContent = album;
  albumsList.appendChild(listItem);
}