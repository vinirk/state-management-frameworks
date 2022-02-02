import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { StoreProvider } from './store/store';
import { initialState, profileReducer } from './store/profileReducer';

const Root = () => (
  <React.StrictMode>
    <StoreProvider initialState={initialState} reducer={profileReducer}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StoreProvider>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));
