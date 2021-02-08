const {
    createAction,
    createReducer,
    configureStore,
  } = require('@reduxjs/toolkit');

  const { initialState, add, loadWorker} = require('./reducer');
  const {asyncMiddleware} = require('./middleware')
  
  const addAction = createAction('add');
  const loadDataAction = createAction('loadData');

  
  const workerReducer = createReducer(initialState, {
    [addAction]: add,
    [loadDataAction]: loadWorker
  });
  
  const store$ = configureStore({
    reducer: workerReducer,
    middleware: [asyncMiddleware]
  });
  
  module.exports = {
    store$,
    addAction,
    loadDataAction,
  };
  