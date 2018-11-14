
import { combineReducers } from 'redux';
import atletes from './reducers/atlete';
import common from './reducers/common';
import { routerReducer } from 'react-router-redux';
export default combineReducers({
  atletes,
  common,
  router: routerReducer
});