import * as actionTypes from './constants';

const colorReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_RED:
      return { ...state, red: Math.min(255, state.red + 10) };
    case actionTypes.DECREMENT_RED:
      return { ...state, red: Math.max(0, state.red - 10) };
    case actionTypes.INCREMENT_GREEN:
      return { ...state, green: Math.min(255, state.green + 10) };
    case actionTypes.DECREMENT_GREEN:
      return { ...state, green: Math.max(0, state.green - 10) };
    case actionTypes.INCREMENT_BLUE:
      return { ...state, blue: Math.min(255, state.blue + 10) };
    case actionTypes.DECREMENT_BLUE:
      return { ...state, blue: Math.max(0, state.blue - 10) };
    default:
      return state;
  }
};

export default colorReducer;
