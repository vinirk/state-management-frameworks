import React, { createContext, useReducer } from 'react';
import { profileReducer } from './profileReducer';

const initialState = {
  username: '',
  fetching: false,
  message: '',
}

export const ProfileContext = createContext(initialState);

export const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Actions
  function updateUsername(username) {
    dispatch({
      type: "UPDATE_USERNAME_REQUEST"
    });

    setTimeout(() => {
      dispatch({
        type: "UPDATE_USERNAME_SUCCESS",
        payload: username
      });
    }, 1000);
  }

  return (
    <ProfileContext.Provider value={{
      username: state.username,
      fetching: state.fetching,
      updateUsername
    }}
    >
      {children}
    </ProfileContext.Provider>
  );
};