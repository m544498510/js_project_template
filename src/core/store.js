
import {applyMiddleware, compose, createStore} from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

let middleware = applyMiddleware(reduxThunk);
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === 'function') {
 middleware = compose(middleware, devToolsExtension());
}

// store is key component in redux
const store = createStore(reducers, {}, middleware);
export default store;
