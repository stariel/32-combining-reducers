import uuid from 'uuid/v1';

// Actions
export const EXPENSE_CREATE = 'Expense/ADD';
export const EXPENSE_UPDATE = 'Expense/UPDATE';
export const EXPENSE_DESTROY = 'Expense/DELETE';

const defaultState = [];

export default function reducer(state = defaultState, action) {

  const { type, payload } = action;
  
  switch (type) {
  case EXPENSE_CREATE:
    payload.id = uuid();
    payload.categoryID = '';
    payload.timestamp = new Date().getTime();
  
    return [...state, payload];
  
  case EXPENSE_UPDATE:
    return state.map(expense => expense.id === payload.id ? payload : expense);
  
  case EXPENSE_DESTROY:
    return state.filter(expense => expense.id !== payload.id);
  
  default: return state;
  }
}