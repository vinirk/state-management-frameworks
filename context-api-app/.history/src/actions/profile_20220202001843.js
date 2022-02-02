import {
  UPDATE_USERNAME_REQUEST,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
} from "../constants/actionTypes";

export const updateUsername = (value) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USERNAME_REQUEST });

    if (value && value.match(/[A-Za-z]/)) {
      setTimeout(() => {
        dispatch({ type: UPDATE_USERNAME_SUCCESS, data: value });
      }, 1000);
    } else {
      dispatch({ type: UPDATE_USERNAME_FAILURE });
    }
  };
};
