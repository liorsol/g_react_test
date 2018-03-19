import { combineReducers } from 'redux';
import menu from './menuReducer';
import { routerReducer } from 'react-router-redux';
import fuelSavings from "./fuelSavingsReducer";

const rootReducer = combineReducers({
  fuelSavings,
  menu,
  routing: routerReducer
});

export default rootReducer;
