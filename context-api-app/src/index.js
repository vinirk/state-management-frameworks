import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { ProfileContextProvider } from './store/ProfileContextProvider';

const Root = () => (
  <React.StrictMode>
    <ProfileContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ProfileContextProvider>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));
