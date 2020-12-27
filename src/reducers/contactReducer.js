const { initialState } = require("./initialState");

export const contactReducer = (state = initialState.contactDetails, action) => {
  if (action.type == "UPDATE_CONTACT") {
    return {
      ...action.contactDetails ,
    };
  }
  else if(action.type =="FAILED_UPDATE_CONTACT"){
    console.log(action.error);
    return state;
  }
  return state;
};
