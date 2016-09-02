import {combineReducers} from 'redux';
import authors from './authorReducer';
import twitts from './twittReducer';

const rootReducer = combineReducers({
  authors,
  twitts
});

export default rootReducer;
