import * as types from './actionTypes';
import twittApi from '../api/mockTwittApi';

export function loadTwittsSuccess(twitts) {
  return { type: types.LOAD_TWITTS_SUCCESS, twitts};
}

export function createTwittSuccess(twitt) {
  return {type: types.CREATE_TWITT_SUCCESS, twitt};
}

export function updateTwittSuccess(twitt) {
  return {type: types.UPDATE_TWITT_SUCCESS, twitt};
}

export function loadTwitts() {
  return function(dispatch) {
    return twittApi.getAllTwitts().then(twitts => {
      dispatch(loadTwittsSuccess(twitts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTwitt(twitt) {
  return function (dispatch, getState) {
    return twittApi.saveTwitt(twitt).then(twitt => {
      twitt.id ? dispatch(updateTwittSuccess(twitt)) :
        dispatch(createTwittSuccess(twitt));
    }).catch(error => {
     throw(error);
    });
  };
}
