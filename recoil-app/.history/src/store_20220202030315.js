import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { init } from "@rematch/core";
import profile from "./models";

const logger = createLogger({
  level: "info",
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true,
});

let middlewares = [thunkMiddleware, logger];

const store = init({
  models: {
    profile,
  },
});

export default store;
