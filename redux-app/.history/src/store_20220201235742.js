import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const logger = createLogger({
  level: "info",
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true,
});

let middlewares = [thunkMiddleware, logger];

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
