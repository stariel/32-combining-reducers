import uuid from 'uuid/v1';

// Actions
export const CATEGORY_CREATE = 'Category/ADD';
export const CATEGORY_UPDATE = 'Category/UPDATE';
export const CATEGORY_DESTROY = 'Category/DELETE';

const defaultState = [];

export default function reducer(state = defaultState, action) {

  const { type, payload } = action;
  
  switch (type) {
  case CATEGORY_CREATE:
    payload.id = uuid();
    payload.timestamp = new Date().getTime();
  
    return [...state, payload];
  
  case CATEGORY_UPDATE:
    return state.map(category => category.id === payload.id ? payload : category);
  
  case CATEGORY_DESTROY:
    return state.filter(category => category.id !== payload.id);
  
  default: return state;
  }
}