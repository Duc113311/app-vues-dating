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
        sexuals: [],
        interests: [],
        images: [],
      },
      isActiveId: true,
      isCheckBox: false,
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
    setSexuals(state, data) {
      debugger;

      const index = state.userProfile.sexuals.indexOf(data);
      if (index > -1) {
        // only splice array when item is found
        state.userProfile.sexuals.splice(index, 1); // 2nd parameter means remove one item only
        state.isCheckBox = false;
      } else {
        if (state.userProfile.sexuals.length < 3) {
          state.userProfile.sexuals.push(data);
        } else {
          state.isCheckBox = true;
        }
      }
    },

    setInterests(state, data) {
      debugger;
      const index = state.userProfile.interests.indexOf(data);
      if (index > -1) {
        // only splice array when item is found
        state.userProfile.interests.splice(index, 1); // 2nd parameter means remove one item only
        state.isActiveId = false;
      } else {
        state.userProfile.interests.push(data);
        state.isActiveId = true;
      }
    },
  },

  // Actions
  actions: {},
});

export default storeUsers;
