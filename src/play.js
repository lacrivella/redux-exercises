import { createStore } from 'redux';

const initialState = {
  drink: '',
  chips: '',
  sandwich: ''
};

function lunchReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: action.payload };
    case 'ADD_CHIP':
      return { ...state, chips: action.payload };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: action.payload };
    case 'REMOVE_DRINK':
      return { ...state, drink: action.payload };
    case 'REMOVE_CHIP':
      return { ...state, chips: action.payload };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: action.payload };
    default:
      return state;
  }
}

const store = createStore(lunchReducer);

//drinks
store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Coca Cola'
});
console.log('add drink', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: ''
});
console.log('remove drink', store.getState());

//chips
store.dispatch({
  type: 'ADD_CHIP',
  payload: 'Dorito'
});
console.log('add chips', store.getState());

store.dispatch({
  type: 'REMOVE_CHIP',
  payload: ''
});
console.log('remove chips', store.getState());
//sandwich

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Turkey Ruben'
});
console.log('add sandwich', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: ''
});
console.log('remove sandwich', store.getState());