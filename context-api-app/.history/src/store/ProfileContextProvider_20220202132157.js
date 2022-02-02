import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={[state, dispatch]}>{children}</Store.Provider>
  );
};