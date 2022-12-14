import { createStore } from "vuex";
import { HTTP } from "../../configs/http-common";

// Create a new store instance.
const storeTokens = createStore({
  // state
  state() {
    return {
      count: 11,
      dataUser: [],
      tokenAccount: {},
      isUserId: false,
      isLogout: false,
      isAppAccess: false,

      isLoadingBtn: false,
    };
  },
  // getters
  // mutations
  mutations: {
    setIsLoadingButton(state, value) {
      debugger;
      state.isLoadingBtn = value;
    },
    increment(state, data) {
      debugger;
      state.dataUser = data;
    },

    setTokenAccount(state, token) {
      debugger;
      state.tokenAccount = token;
    },

    setUserIdExits(state, isUserId) {
      state.isUserId = isUserId;
    },

    setLogoutApp(state, data) {
      state.isLogout = data;
    },

    setAppAccess(state, data) {
      state.isAppAccess = data;
    },
  },
  // actions
  actions: {
    async getAllData({ commit }) {
      debugger;
      await HTTP.get(`base/v1/users`)
        .then((response) => {
          commit("increment", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**
     * Tạo Token sau khi login thành công
     * @param {*} param0
     * @param {*} param1
     */
    async postTokenByUserID({ commit }, { id }) {
      debugger;
      await HTTP.post("login/v1/create-token/" + id)
        .then((response) => {
          debugger;
          localStorage.setItem("userId", response.data.data.userId);
          localStorage.setItem("accessToken", response.data.data.accessToken);
          localStorage.setItem("refreshToken", response.data.data.refreshToken);
          commit("setTokenAccount", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async checkUserIdExist({ commit }, { id }) {
      debugger;
      await HTTP.get("user/v1/check-exits/" + id)
        .then((response) => {
          commit("setUserIdExits", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async logoutApp({ commit }, { id }) {
      debugger;
      await HTTP.delete("user/v1/logout/" + id)
        .then((response) => {
          debugger;
          commit("setLogoutApp", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async checkAppAccess({ commit }, { id }) {
      debugger;
      await HTTP.get("login/v1/access/" + id)
        .then((response) => {
          debugger;
          commit("setAppAccess", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async checkExistUserId({ commit }, { id }) {
      debugger;
      await HTTP.get(`login/v1/check-exist?userId=${id}`)
        .then((response) => {
          debugger;
          commit("setAppAccess", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default storeTokens;
