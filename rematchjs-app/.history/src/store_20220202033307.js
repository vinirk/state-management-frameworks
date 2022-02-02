import { init } from "@rematch/core";
import profile from "./models/profile";

const store = init({
  models: {
    profile,
  },
})

export default store;
