import { 
  ADD_DRINK,
  ADD_CHIP,
  ADD_SANDWICH,
  REMOVE_DRINK,
  REMOVE_CHIP,
  REMOVE_SANDWICH 
} from '../action_play/lunch';

const initialState = {
  drink: [],
  chip: [],
  sandwich: []
};

export default function lunchReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: [...state.drink, action.payload] };
    case ADD_CHIP:
      return { ...state, chip: [...state.chip, action.payload] };
    case ADD_SANDWICH:
      return { ...state, sandwich: [...state.sandwich, action.payload] };
    case REMOVE_DRINK:
      return { ...state, drink: state.drink.filter(d => d !== action.payload) };
    case REMOVE_CHIP:
      return { ...state, chip: state.chip.filter(c => c !== action.payload) };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: state.sandwich.filter(s => s !== action.payload) };
    case 'EMPTY_BOX':
      return { drink: [], chips: [], sandwich: [] };
    default:
      return state;
  }
}
