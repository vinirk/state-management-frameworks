import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { init } from "@rematch/core";
import profile from "./models/profile";
import logger from 'rematch-logger';

const store = init({
  models: {
    profile,
  },
  plugins: [logger()],
})

export default store;
