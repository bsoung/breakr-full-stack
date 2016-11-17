import { default as thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;