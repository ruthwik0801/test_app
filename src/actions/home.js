//actions are objects with type, payload properties... payload can be optional
// action creator generates  returns actions (objects)

//in this case we need to pass the input text values, so we have payload prop which will send the given input value to the store to update the application state.
export const setButtonText = text => {
  //add debugger here
  return {
    type: "SET_BUTTON_TEXT",
    payload: text
  };
};
