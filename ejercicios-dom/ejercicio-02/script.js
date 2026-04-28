// Ejercicio 2
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// loop con javascript.
// 2.4 Inserta dinamicamente con javascript en un html una p con el
// texto 'Soy dinámico!'.
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// Recuerda que no solo puedes insertar elementos con .appendChild.
// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// .fn-insert-here

const originalDivs = document.querySelectorAll('body > div');

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

const divWithP = document.createElement('div');
const paragraphInsideDiv = document.createElement('p');
divWithP.appendChild(paragraphInsideDiv);
document.body.appendChild(divWithP);

const divWithSixP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const paragraph = document.createElement('p');
  divWithSixP.appendChild(paragraph);
}
document.body.appendChild(divWithSixP);

const dynamicParagraph = document.createElement('p');
dynamicParagraph.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicParagraph);

document.querySelector('h2.fn-insert-here').textContent = 'Wubba Lubba dub dub';

const list = document.createElement('ul');
for (const app of apps) {
  const listItem = document.createElement('li');
  listItem.textContent = app;
  list.appendChild(listItem);
}
document.body.appendChild(list);

const removeParagraphs = document.querySelectorAll('.fn-remove-me');
for (const paragraph of removeParagraphs) {
  paragraph.remove();
}

const middleParagraph = document.createElement('p');
middleParagraph.textContent = 'Voy en medio!';
originalDivs[0].after(middleParagraph);

const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
for (const div of insertHereDivs) {
  const insideParagraph = document.createElement('p');
  insideParagraph.textContent = 'Voy dentro!';
  div.appendChild(insideParagraph);
}