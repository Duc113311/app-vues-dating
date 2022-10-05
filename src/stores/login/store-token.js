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
    };
  },
  // getters
  // mutations
  mutations: {
    increment(state, data) {
      state.dataUser = data;
    },

    setTokenAccount(state, token) {
      debugger;
      state.tokenAccount = token;
    },

    setUserIdExits(state, isUserId) {
      state.isUserId = isUserId;
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
          document.cookie = `userId=${response.data.data.userId}`;
          document.cookie = `accessToken=${response.data.data.accessToken}`;
          document.cookie = `refreshToken=${response.data.data.refreshToken}`;
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
  },
});

export default storeTokens;
