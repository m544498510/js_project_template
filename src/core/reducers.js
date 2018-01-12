import {combineReducers} from 'redux';
import moduleReducer from './module/reducer';

export default combineReducers({
  module: moduleReducer
});
