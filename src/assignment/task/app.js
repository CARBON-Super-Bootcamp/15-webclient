require('./task.css');
const { store$ } = require('./store');
const {
  addTaskAsync,
  loadTasksAsync,
  doneTaskAsync,
  undoneTaskAsync,
} = require('./task-client');


const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
const inputFile = document.querySelector('#attachment');
const inputName = document.querySelector('#name');

form.onsubmit = (event) => {
  event.preventDefault();
  const data = {
    name: inputName.value,
    attachment: inputFile.value,
    assigneeId: 1
  };
  console.log(data)
  store$.dispatch(addTaskAsync(data))

//   console.log(inputFile.value);
//   console.log(inputName.value);

};
