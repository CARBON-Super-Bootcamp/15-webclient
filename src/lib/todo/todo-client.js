const { dispatch } = require('rxjs/internal/observable/pairs');
const { fetchTasksApi, addTaskApi, doneTaskApi, undoneTaskApi } = require('../api/todo-service');
const {
  addAction,
  doneAction,
  undoneAction,
  loadTasksAction,
} = require('./store');

const addTaskAsync = (task) => async (dispatch, getState) => {
  console.log('task asyn')
  const taskData = await addTaskApi(task);
  console.log(taskData)
  dispatch(addAction(taskData));
};

const loadTasksAsync = async (dispatch, getState) => {
  const tasksAsync = await fetchTasksApi();
  dispatch(loadTasksAction(tasksAsync));
};

const doneTaskAsync = (id) => {
  return async (dispatch, getState) => {
    await doneTaskApi(id);
    dispatch(doneAction(id));
  };
};

const undoneTaskAsync = (id) => {
  return async (dispatch, getState) => {
    try {
      await undoneTaskApi(id);
      dispatch(undoneAction(id));
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = {
  addTaskAsync,
  loadTasksAsync,
  doneTaskAsync,
  undoneTaskAsync,
};
