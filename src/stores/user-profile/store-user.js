import { createStore } from "vuex";
import { HTTP } from "../../configs/http-common";

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
      userID: null,
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

    setListAvatar(state, data) {
      debugger;
      const idUrl = data.id;
      const index = state.userProfile.images.indexOf(idUrl);
      if (index > -1) {
        // only splice array when item is found
        state.userProfile.images.splice(index, 1); // 2nd parameter means remove one item only
      } else {
        state.userProfile.images.push(data);
      }
    },

    setUserProfiles(state, data) {
      state.userID = data;
    },
  },

  // Actions
  actions: {
    async postUserProfile({ commit }, data) {
      debugger;
      await HTTP.post("user/v1", data)
        .then((response) => {
          debugger;
          commit("setUserProfiles", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default storeUsers;
