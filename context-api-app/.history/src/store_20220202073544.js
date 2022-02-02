import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({ children, initialState, reducer }) => {
  // const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const logoColor = '#ff0000';

  return (
    // <Store.Provider value={[globalState, dispatch]}>{children}</Store.Provider>
    <Store.Provider value={logoColor}>{children}</Store.Provider>
  );
};