// function to create a one second delay
const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

const profile = {
  state: {
    name: "",
    fetching: false,
    message: null,
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
  },
  effects: {
    async updateUsername(payload, rootState) {
      this.fetching(true);
      if (payload) {
        await delay(1000);
        this.fetching(false);
        this.update(payload);
      }
    },
  },
};

export default profile;
