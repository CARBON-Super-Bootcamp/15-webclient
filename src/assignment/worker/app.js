require('./styles.css');
const { store$ } = require('./store');
const {loadTable} = require('./view');
const {getListWorker} = require('./worker-client')


const form = document.getElementById('form');

form.onsubmit = (event) => {
    event.preventDefault();
    store$.dispatch(addTaskAsync(task));
};

store$.subscribe(() => {
    const state = store$.getState();
    loadTable(state);
});

store$.dispatch(getListWorker);

