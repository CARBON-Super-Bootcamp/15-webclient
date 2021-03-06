const { client } = require('./client');

async function fetchTasksApi() {
  return await client.get('http://localhost:9998/list');
}

async function addTaskApi(task) {
  console.log('add task api')
  return await client.post('http://localhost:9998/add', { task });
}

async function doneTaskApi(id) {
  return await client.put(`http://localhost:9998/done?id=${id}`);
}

async function undoneTaskApi(id){
  return await client.put(`http://localhost:9998/undone?id=${id}`);
}
 
module.exports = {
  fetchTasksApi,
  addTaskApi,
  doneTaskApi,
  undoneTaskApi,
};
