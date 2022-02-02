import { init } from "@rematch/core";
import profile from "./models/profile";

const store = init({
  models: {
    profile,
  },
  redux: {
    devtoolOptions: {
      actionSanitizer: (action) => action,
    },
  },
})

export default store;
