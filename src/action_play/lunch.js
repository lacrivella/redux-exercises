export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: ADD_DRINK,
  payload: drink
});

export const ADD_CHIP = 'ADD_CHIP';
export const addChip = chip => ({
  type:ADD_CHIP,
  payload: chip
});

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = drink => ({
  type: REMOVE_DRINK,
  payload: drink
});

export const REMOVE_CHIP = 'REMOVE_CHIP';
export const removeChip = chip => ({
  type: REMOVE_CHIP,
  payload: chip
});

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = sandwich => ({
  type: REMOVE_SANDWICH,
  payload: sandwich
});
