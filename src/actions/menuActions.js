import * as types from '../constants/actionTypes';


// example of a thunk using the redux-thunk middleware
export function toggleMenuState() {
  return function (dispatch) {
    return dispatch({
      type: types.TOGGLE_MENU_OPEN_STATE,
    });
  };
}

