import {INCREASE, DECREASE, ADD_NUMBER} from '../actions/type';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREASE:
    return state + 1;
    case DECREASE:
      return state - 1;
    case ADD_NUMBER: 
      return state + action.payload;
    default:
      return state;
  }
}