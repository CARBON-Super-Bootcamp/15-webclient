require('./task.css');

const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
const inputFile = document.querySelector('#attachment');
const inputName = document.querySelector('#name');

console.log(form, list);

form.onsubmit = (event) => {
  event.preventDefault();
//   console.log(inputFile.value);
//   console.log(inputName.value);

};
