import {TOGGLE_MENU_OPEN_STATE} from '../constants/actionTypes';
import objectAssign from 'object-assign';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

const initialState =  {
  open: false
};

export default function menuReducer(state = initialState, action) {

  switch (action.type) {
    case TOGGLE_MENU_OPEN_STATE:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {open: !state.open});

    default:
      return state;
  }
}
