const { dispatch } = store;

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
      if (payload) {
        this.update(payload);
      } else {
        dispatch({ type: "profile/fetching", payload: false });
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