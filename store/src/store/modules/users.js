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
  mutations: {},
  actions: {
    // 8
    addNewUser(contex, user) {
      console.log(contex);
      console.log(user);
    },
  },
};

export default usersStore;
