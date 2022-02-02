import {
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
} from "../constants/actionTypes";

const initialState = {
  name: "",
  fetching: false,
  message: null,
};
export const profile = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME_REQUEST:
      return {
        ...state,
        fetching: true,
        message: null,
      };
    case UPDATE_USERNAME_SUCCESS:
      return {
        ...state,
        fetching: false,
        name: action.data,
        message: `Username updated successfully. (${action.data})`
      };
    case UPDATE_USERNAME_FAILURE:
      return {
        ...state,
        fetching: false,
        name: null,
        message: "Username is invalid."
      };
    default:
      return state;
  }
};
