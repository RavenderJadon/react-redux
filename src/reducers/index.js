import { combineReducers } from "redux";
import counterReducer from './counter';
import loggedReducer from './isLogged';
import counterMultiply from './counterMultiply';

const allReducers = combineReducers({
  counterReducer,
  loggedReducer,
  counterMultiply,
})

export default allReducers ; 