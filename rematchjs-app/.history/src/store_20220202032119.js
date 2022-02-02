import { init } from "@rematch/core";
import profile from "./models/profile";
import logger from 'rematch-logger';

const store = init({
  models: {
    profile,
  },
  plugins: [logger()],
})

export default { getState, dispatch } = store;
