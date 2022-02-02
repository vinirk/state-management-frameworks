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
        message: "Username updated."
      };
    },
    fetching(state, payload) {
      return {
        ...state,
        fetching: payload,
      };
    },
    post(state, payload) {
      return {
        ...state,
        id: payload.id,
        name: payload.name,
      };
    },
  },
  effects: {
    async updateUsername(payload, rootState) {
      this.fetching(true);
      if (payload) {
        await delay(1000);
        this.update(payload);
        this.fetching(false);
      }
    },
    async loadPostById(payload, rootState) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${payload}`
      );
      const data = await response.json();
      this.post(data);
    },
    async asyncRemove(id, state) {
      await delay(1000);
      this.remove(id);
    },
  },
};

export default profile;
