import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";

const logger = createLogger({
  level: "info",
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true,
});

let middlewares = [logger];

const store = applyMiddleware(...middlewares, createStore(reducers));

export default store;
