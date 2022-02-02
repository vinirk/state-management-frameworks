// function to create a one second delay
const delay = (time) =>
  new Promise((resolve) => setTimeout(() => resolve(), time));

export default profile = {
  state: {
    name: "",
    fetching: false,
    message: null,
  },
  reducers: {
    post(state, payload) {
      return {
        ...state,
        id: payload.id,
        name: payload.name,
      };
    },
  },
  effects: {
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
