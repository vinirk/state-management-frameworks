import React from 'react';
import { profileReducer } from './profileReducer';

const initialState = {
  username: '',
  fetching: false,
  message: '',
}

export const ProfileContext = () => React.createContext(initialState);

export const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(profileReducer, initialState);

  // Actions
  function updateUsername(username) {
    dispatch({
      type: "UPDATE_USERNAME_REQUEST",
      payload: username
    });
  }

  return (
    <Store.Provider value={{
      username: state.username,
      fetching: state.fetching,
      updateUsername
    }}>{children}</Store.Provider>
  );
};