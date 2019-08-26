import { createStore } from 'redux';
import {
  ADD_DRINK,
  addDrink,
  ADD_CHIP,
  addChip,
  ADD_SANDWICH,
  addSandwich,
  REMOVE_DRINK,
  removeDrink,
  REMOVE_CHIP,
  removeChip,
  REMOVE_SANDWICH,
  removeSandwich
} from './action_play/lunch';
import lunchReducer from './reducers/lunchReducer';

const store = createStore(lunchReducer);

//drinks
store.dispatch(addDrink('Coca Cola'));
store.dispatch(addDrink('Water'));
console.log('add drink', store.getState());

store.dispatch(removeDrink('Water'));
console.log('remove drink', store.getState());

//chip
store.dispatch(addChip('Doritos'));
store.dispatch(addChip('Pringles'));
store.dispatch(addChip('Waves'));
console.log('add chips', store.getState());

store.dispatch(removeChip('Waves'));
console.log('remove chips', store.getState());


//sandwich

store.dispatch(addSandwich('Turkey'));
store.dispatch(addSandwich('BLT'));
store.dispatch(addSandwich('Grilled Cheese'));
console.log('add sandwich', store.getState());

store.dispatch(removeSandwich('BLT'));
console.log('remove sandwich', store.getState());

store.dispatch({
  type: 'EMPTY_BOX'
});

//IF YOU WERE DOING THIS WITH NUMBERS, YOU WOULD JUST ADD ONE LIKE state.drink + 1
//NO PAYLOAD REQUIRED