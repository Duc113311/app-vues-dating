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
      listUserProfiles: [],
      urlImageData: "",
      numberImage: 0,
      listSexuals: [],
      listInterests: [],
      isUserProfile: false,

      isActiveColor: true,
      userInfor: {},
    };
  },

  // Mutations
  mutations: {
    /**
     * Xét email cho thông tin của User-Profile
     * @param {*} state
     * @param {*} value
     */
    setEmail(state, value) {
      debugger;
      state.userProfile.email = value;
    },
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
        state.userProfile.sexuals.splice(index, 1);
        state.isCheckBox = false;
        // 2nd parameter means remove one item only
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
        if (state.userProfile.interests.length < 5) {
          state.userProfile.interests.push(data);
          state.isActiveId = true;
        } else {
          state.isActiveId = false;
        }
      }
    },

    setListAvatar(state, data) {
      debugger;
      const idUrl = data.id;
      const index = state.userProfile.images.findIndex((x) => x.id === idUrl);
      if (index !== -1) {
        // only splice array when item is found
        state.userProfile.images.splice(index, 1); // 2nd parameter means remove one item only
      } else {
        state.userProfile.images.push(data);
      }
    },

    setLocation(state, data) {
      debugger;
      state.userProfile.latitude = data.latitude;
      state.userProfile.longitude = data.longitude;
    },

    setUserProfiles(state, data) {
      state.userID = data;
    },

    setListUserProfiles(state, data) {
      debugger;
      state.listUserProfiles = data[0];
      state.numberImage = data[0].images;
      state.urlImageData = data[0].images[0].url;
      state.listUserProfilesPage = data;
      state.listSexuals = data[0].sexuals;
      state.listInterests = data[0].interests;
    },

    setUrlImageData(state, data) {
      state.urlImageData = data;
    },

    setNextUserProfile(state, data) {
      debugger;
      state.listUserProfiles = state.listUserProfilesPage[data];
      state.urlImageData = state.listUserProfilesPage[data].images[0].url;
      state.listSexuals = state.listUserProfilesPage[data].sexuals;
      state.listInterests = state.listUserProfilesPage[data].interests;
      state.numberImage = state.listUserProfilesPage[data].images;
    },

    setUserProfileExits(state, isUserId) {
      state.isUserProfile = isUserId;
    },

    setIsActive(state, isActive) {
      debugger;
      state.isActiveColor = isActive;
    },

    setDetailUserProfile(state, data) {
      state.userInfor = data;
    },
  },

  // Actions
  actions: {
    async postUserProfile({ commit }, data) {
      debugger;
      await HTTP.post(`base/v1/users/${data.userId}`, data)
        .then((response) => {
          debugger;
          commit("setUserProfiles", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**
     *
     * @param {*} param0
     * @param {*} entity
     */
    async getListUserProfiles({ commit }, entity) {
      await HTTP.get("base/v1/" + entity)
        .then((response) => {
          debugger;
          commit("setListUserProfiles", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async checkUserProfileExist({ commit }, { id }) {
      debugger;
      await HTTP.get("user/v1/check-exits/profile/" + id)
        .then((response) => {
          commit("setUserProfileExits", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getDetalUserProfile({ commit }, { userId }) {
      debugger;
      await HTTP.get("user/v1/get-detail/" + userId)
        .then((response) => {
          commit("setDetailUserProfile", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default storeUsers;
