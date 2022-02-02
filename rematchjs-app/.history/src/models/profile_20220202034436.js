// function to create a one second delay
const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const profile = {
  state: {
    name: "",
    fetching: false,
    message: null,
    error: "",
  },
  reducers: {
    update(state, payload) {
      return {
        ...state,
        name: payload,
        message: "Username updated.",
      };
    },
    fetching(state, payload) {
      return {
        ...state,
        fetching: payload,
      };
    },
    error(state, payload) {
      return {
        ...state,
        error: payload,
      };
    },
  },
  effects: {
    async updateUsername(payload, rootState) {
      this.fetching(true);
      await delay(1000);
      this.fetching(false);
      if (payload) {
        this.update(payload);
      } else {
        this.error("Invalid username");
      }
    },
  },
};

export default profile;
