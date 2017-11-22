/**
 * redux state should have initial state when loading the application. orelse it returns undefined which will be tough to track the error
 * 
 */

// so we hadefine initial state
const initalState = {
  inputValue: ""
};

// REDCUER
function homeReducer(state = initalState, action) {
  //based on action instruction, do different things

  //add debugger here
  switch (action.type) {
    //if we send the action instruction as SET_BUTTON_TEXT we should get new state with this action's payload
    case "SET_BUTTON_TEXT":
      //so we returning new state with this new payload
      return { ...state, inputValue: action.payload };
    // if no insatruction/actions given to the store.. by default return initial state
    default:
      return state;
  }
}

export default homeReducer;
