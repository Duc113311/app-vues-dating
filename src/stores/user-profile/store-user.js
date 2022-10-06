import { createStore } from "vuex";
// import { HTTP } from "../../configs/http-common";

const storeUsers = createStore({
  // State
  state() {
    return {
      userProfile: {
        firstName: "",
        birthday: "",
        gender: 0,
      },
    };
  },

  // Mutations
  mutations: {
    setUserProfile(state, data) {
      state.userProfile.firstName = data;
    },
    setBirthday(state, data) {
      state.userProfile.birthday = data;
    },
    setGender(state, data) {
      state.userProfile.gender = data;
    },
  },

  // Actions
  actions: {},
});

export default storeUsers;
