
import { createStore, combineReducers } from 'redux';
import categoryState from './category-reducer.js';
import expenseState from './expense-reducer.js';

const rootReducer = combineReducers({
  categoryState,
  expenseState,
});

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());