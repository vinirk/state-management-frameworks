import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import App from "./App";

const Root = () => (
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);

ReactDOM.render(<Root />, document.getElementById("root"));
