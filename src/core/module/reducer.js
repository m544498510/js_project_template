
import {types} from './action';

const defaultState = {
  text: 'hello world!'
};

export default function(state = defaultState, {type, payload}) {
  switch (type) {
    case types:
      return Object.assign({}, state, {
      
      });
    default:
      return state;
  }
}
