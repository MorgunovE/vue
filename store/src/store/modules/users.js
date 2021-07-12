// 8-3
import Vue from "vue";
// 4
const usersStore = {
  // 4-3
  namespaced: true,
  // 4-2
  state: {
    // 4-4
    list: {
      1: {
        name: "Max",
        age: 30,
      },
    },
  },
  getters: {
    // 4-5
    usersList: ({ list }) => Object.values(list),
  },
  mutations: {
    // 8-1
    ADD_USER(state, user) {
      // 8-4
      Vue.set(state.list, user.id, user);
    },
  },
  actions: {
    // 8
    addNewUser({ commit }, user) {
      const newUser = { ...user, id: String(Math.random()) };
      // 8-2
      commit("ADD_USER", newUser);
    },
  },
};

export default usersStore;
