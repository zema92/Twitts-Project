import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function twittReducer(state = initialState.twitts, action) {
  switch (action.type) {
    case types.LOAD_TWITTS_SUCCESS:
      return action.twitts;

    case types.CREATE_TWITT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.twitt)
      ];

    case types.UPDATE_TWITT_SUCCESS:
      return [
        ...state.filter(twitt => twitt.id !== action.twitt.id),
        Object.assign({}, action.twitt)
      ];

    default:
      return state;
  }
}
