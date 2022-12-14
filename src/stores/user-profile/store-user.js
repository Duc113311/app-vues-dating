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
        avatars: [],
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
      showGender: 0,
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
      state.userProfile.email = value;
    },
    setPhoneNumber(state, value) {
      state.userProfile.phoneNumber = value;
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

    setShowGender(state, data) {
      state.showGender = data;
      localStorage.setItem("showGender", data);
    },
    setSexuals(state, data) {
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
      const idUrl = data.id;
      const index = state.userProfile.avatars.findIndex((x) => x.id === idUrl);
      if (index !== -1) {
        // only splice array when item is found
        state.userProfile.avatars.splice(index, 1); // 2nd parameter means remove one item only
      } else {
        state.userProfile.avatars.push(data);
      }
    },

    setLocation(state, data) {
      state.userProfile.latitude = data.latitude;
      state.userProfile.longitude = data.longitude;
      localStorage.setItem("latitude", data.latitude);
      localStorage.setItem("longitude", data.longitude);
    },

    setUserProfiles(state, data) {
      state.userID = data;
    },

    setListUserProfiles(state, data) {
      debugger;
      state.listUserProfiles = data;
      // state.listUserProfiles = data[0];
      // state.numberImage = data[0].avatars;
      // state.urlImageData = data[0].avatars[0].urlName;
      // state.listUserProfilesPage = data;
      // state.listSexuals = data[0].sexuals;
      // state.listInterests = data[0].interests;
    },

    setUrlImageData(state, data) {
      state.urlImageData = data;
    },

    setNextUserProfile(state, data) {
      state.listUserProfiles = state.listUserProfilesPage[data];
      state.urlImageData = state.listUserProfilesPage[data].avatars[0].urlName;
      state.listSexuals = state.listUserProfilesPage[data].sexuals;
      state.listInterests = state.listUserProfilesPage[data].interests;
      state.numberImage = state.listUserProfilesPage[data].avatars;
    },

    setUserProfileExits(state, isUserId) {
      state.isUserProfile = isUserId;
    },

    setIsActive(state, isActive) {
      state.isActiveColor = isActive;
    },

    setDetailUserProfile(state, data) {
      state.userInfor = data;
    },
  },

  // Actions
  actions: {
    async postUserProfile({ commit }, data) {
      await HTTP.post(`user/v1/create-one/${data.userId}`, data)
        .then((response) => {
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
    async getListUserProfiles({ commit }, params) {
      await HTTP.post("home/v1/list-users", params)
        .then((response) => {
          commit("setListUserProfiles", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async checkUserProfileExist({ commit }, { id }) {
      await HTTP.get("user/v1/check-exits/profile/" + id)
        .then((response) => {
          commit("setUserProfileExits", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getDetalUserProfile({ commit }, { userId }) {
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
