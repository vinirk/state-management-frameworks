import { init } from "@rematch/core";
import profile from "./models/profile";
import updatedPlugin from "@rematch/updated";

const store = init({
  models: {
    profile,
  },
  plugins: [updatedPlugin()],
})

export default store;
