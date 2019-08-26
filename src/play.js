import { createStore } from 'redux';

const initialState = {
  drink: [],
  chips: [],
  sandwich: []
};

function lunchReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_DRINK':
      return { ...state, drink: [...state.drink, action.payload] };
    case 'ADD_CHIP':
      return { ...state, chips: [...state.chip, action.payload] };
    case 'ADD_SANDWICH':
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case 'REMOVE_DRINK':
      return { ...state, drink: state.drink.filter(d => d !== action.payload) };
    case 'REMOVE_CHIP':
      return { ...state, chips: state.chips.filter(c => c !== action.payload) };
    case 'REMOVE_SANDWICH':
      return { ...state, sandwich: state.sandwich.filter(s => s !== action.payload) };
    case 'EMPTY_BOX':
      return { drink: [], chips: [], sandwich: [] };
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
store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Water'
});
console.log('add drink', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'Coca Cola'
});
console.log('remove drink', store.getState());

//chips
store.dispatch({
  type: 'ADD_CHIP',
  payload: 'Dorito'
});
store.dispatch({
  type: 'ADD_CHIP',
  payload: 'Pringles'
});
store.dispatch({
  type: 'ADD_CHIP',
  payload: 'Waves'
});
console.log('add chips', store.getState());

store.dispatch({
  type: 'REMOVE_CHIP',
  payload: 'Dorito'
});
console.log('remove chips', store.getState());


//sandwich

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Turkey Ruben'
});
store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'BLT'
});
store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'Grilled Cheese'
});
console.log('add sandwich', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'Turkey Ruben'
});
console.log('remove sandwich', store.getState());

store.dispatch({
  type: 'EMPTY_BOX'
});

//IF YOU WERE DOING THIS WITH NUMBERS, YOU WOULD JUST ADD ONE LIKE state.drink + 1
//NO PAYLOAD REQUIRED