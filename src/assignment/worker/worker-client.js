const { listWorkerApi, addWorkerApi, deleteWorkerApi } = require('./api/worker-service');
const {addAction,loadDataAction} = require('./store');

const getListWorker = async (dispatch,getState) => {
    const workersAsync = await listWorkerApi();
    dispatch(loadDataAction(workersAsync));
}

const registerWorker = (worker) => async (dispatch,getState) => {
    try {
        await addWorkerApi(worker);
        dispatch(addAction(addAction));
    } catch (error) {
        
    }
}

module.exports = {getListWorker}